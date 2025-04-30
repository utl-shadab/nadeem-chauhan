import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format, addDays, startOfDay, addHours, isBefore, isAfter } from 'date-fns';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';

// Appointment types
const appointmentTypes = [
  { id: 'initial', name: 'Initial Consultation', duration: 30 },
  { id: 'followup', name: 'Follow-up Meeting', duration: 45 },
  { id: 'legal-advice', name: 'Legal Advice Session', duration: 60 },
  { id: 'document-review', name: 'Document Review', duration: 60 },
  { id: 'case-discussion', name: 'Case Discussion', duration: 90 },
];

// Available time slots
const availableTimeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', 
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

// Attorneys
const attorneys = [
  { id: 'nadeem', name: 'Nadeem Chauhan', specialties: ['Corporate Law', 'Real Estate'] },
  { id: 'ananya', name: 'Ananya Sharma', specialties: ['Family Law', 'Estate Planning'] },
  { id: 'rajiv', name: 'Rajiv Mehta', specialties: ['Criminal Defense', 'Personal Injury'] },
  { id: 'priya', name: 'Priya Patel', specialties: ['Immigration Law', 'Employment Law'] },
];

// Define the form schema
const appointmentSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  date: z.date({ required_error: 'Please select a date' }),
  time: z.string({ required_error: 'Please select a time' }),
  type: z.string({ required_error: 'Please select a consultation type' }),
  attorney: z.string({ required_error: 'Please select an attorney' }),
  message: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const AppointmentScheduler = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedType, setSelectedType] = useState('');

  // Set up the form
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  // Function to handle form submission
  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    try {
      // Determine the endpoint URL based on environment
      let apiUrl = '/api/schedule-appointment';
      
      // In production, use Netlify function path
      if (import.meta.env.PROD) {
        apiUrl = '/.netlify/functions/schedule-appointment';
      }
      
      // Send data to backend API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to schedule appointment');
      }
      
      // Show success message
      toast({
        title: "Appointment scheduled!",
        description: `Your consultation has been scheduled for ${format(data.date, 'MMMM d, yyyy')} at ${data.time}. A confirmation has been sent to your email.`,
      });
      
      setIsCompleted(true);
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "We couldn't schedule your appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter available times based on date and appointment type
  const getAvailableTimes = () => {
    // For demo purposes, we're showing fewer slots on Fridays and weekends
    if (!selectedDate) return availableTimeSlots;
    
    const day = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday
    
    // Weekends have limited availability
    if (day === 0) return ['10:00 AM', '11:00 AM'];
    if (day === 6) return ['10:00 AM', '11:00 AM', '01:00 PM'];
    
    // Friday afternoons are limited
    if (day === 5) return ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM'];
    
    // Regular availability for other days
    return availableTimeSlots;
  };

  // Function to get the duration for the selected appointment type
  const getSelectedTypeDuration = () => {
    const found = appointmentTypes.find(type => type.id === selectedType);
    return found ? found.duration : 30; // Default to 30 minutes
  };

  // Filter attorneys based on appointment type
  const getAvailableAttorneys = () => {
    // In a real application, this would filter based on attorney availability and specialties
    return attorneys;
  };

  // Calculate the next available date (no appointments on past dates)
  const today = startOfDay(new Date());
  const nextMonday = addDays(today, (7 - today.getDay()) % 7 + 1);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  // Success screen after scheduling
  if (isCompleted) {
    return (
      <motion.div 
        className="bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
          <span className="material-icons text-3xl text-green-600">check_circle</span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Appointment Scheduled!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for scheduling a consultation with us. We have sent a confirmation email with all the details. 
          One of our representatives will also contact you shortly to confirm your appointment.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-500">
            Please arrive 10 minutes before your scheduled time. If you need to reschedule or cancel, 
            please contact us at least 24 hours in advance.
          </p>
        </div>
        
        <div className="flex justify-center space-x-4">
          <Button variant="outline" onClick={() => setIsCompleted(false)}>
            Schedule Another
          </Button>
          <Button onClick={() => window.location.href = "/"}>
            Return to Home
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="p-8 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">Schedule a Consultation</h2>
        <p className="text-gray-600 mt-2">Select your preferred date and time for a consultation with our legal experts.</p>
      </div>

      <div className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Consultation Type</FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value);
                          setSelectedType(value);
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type of consultation" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.name} ({type.duration} min)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Preferred Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <span className="material-icons ml-auto h-4 w-4 opacity-50">
                                calendar_today
                              </span>
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              setSelectedDate(date);
                            }}
                            disabled={(date) => 
                              isBefore(date, today) || 
                              date.getDay() === 0 || // No appointments on Sundays
                              isAfter(date, addDays(today, 30)) // Only allow bookings 30 days in advance
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Time</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a time slot" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {getAvailableTimes().map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="attorney"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Attorney</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an attorney (optional)" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {getAvailableAttorneys().map((attorney) => (
                            <SelectItem key={attorney.id} value={attorney.id}>
                              {attorney.name} ({attorney.specialties.join(', ')})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brief description of your legal matter</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide a brief description of your legal matter to help us prepare for the consultation." 
                        {...field} 
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600"
              variants={itemVariants}
            >
              <p>
                <strong>Note:</strong> This is a request for an appointment. Our team will confirm the availability 
                within 24 hours. If the requested time is not available, we will suggest alternative options.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
              </Button>
            </motion.div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default AppointmentScheduler;