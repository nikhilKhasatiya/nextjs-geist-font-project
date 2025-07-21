'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const contactInfo = [
    {
      label: "Email",
      value: "nikprajapati2019@gmail.com",
      href: "mailto:nikprajapati2019@gmail.com"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nikhil-khasatiya",
      href: "https://www.linkedin.com/in/nikhil-khasatiya/"
    },
    {
      label: "Phone",
      value: "(+91) 9773447454",
      href: "tel:+919773447454"
    },
    {
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: null
    }
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover:scale-105 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center justify-between hover:translate-x-1 transition-transform duration-200">
                    <span className="font-medium">{info.label}:</span>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-primary hover:underline hover:scale-105 transition-all duration-200"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{info.value}</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:scale-105 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-200">
                    <Badge variant="secondary" className="hover:scale-110 transition-transform duration-200">Open to Work</Badge>
                    <span className="text-sm text-muted-foreground">Global Remote or Hybrid Mode Full-time positions</span>
                  </div>
                  <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-200">
                    <Badge variant="outline" className="hover:scale-110 transition-transform duration-200">Freelance</Badge>
                    <span className="text-sm text-muted-foreground">Project-based work</span>
                  </div>
                  <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-200">
                    <Badge variant="outline" className="hover:scale-110 transition-transform duration-200">Consulting</Badge>
                    <span className="text-sm text-muted-foreground">Technical consultation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover:scale-105 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                I'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="hover:scale-105 transition-transform duration-200 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="hover:scale-105 transition-transform duration-200 focus:scale-105"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                    className="hover:scale-105 transition-transform duration-200 focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="hover:scale-105 transition-transform duration-200 focus:scale-105"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full hover:scale-105 transition-all duration-300 hover:shadow-lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-sm text-green-600 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="text-sm text-red-600 text-center">
                    Failed to send message. Please try again or contact me directly.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact
