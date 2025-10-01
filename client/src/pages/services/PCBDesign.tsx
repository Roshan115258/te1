import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CircuitBoard, CheckCircle, Layers, Zap, Shield, FileSearch, Pencil, Layout, TestTube, FileText, Rocket, ChevronDown } from "lucide-react";
import { useState } from "react";

const PCBDesign = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "What is the typical turnaround time for PCB design?",
      a: "Turnaround time depends on complexity. Simple 2-4 layer boards take 1-2 weeks, while complex multilayer HDI designs require 3-6 weeks. We provide detailed timelines during the initial consultation."
    },
    {
      q: "Do you provide manufacturing support after design completion?",
      a: "Yes! We provide complete manufacturing documentation including Gerber files, BOM, assembly drawings, and can recommend trusted PCB manufacturers. We also offer manufacturing oversight services."
    },
    {
      q: "Can you work with my existing schematics?",
      a: "Absolutely. We can import schematics from various formats including Altium, Eagle, KiCad, and OrCAD. We'll review and optimize them before starting the layout process."
    },
    {
      q: "What design tools do you use?",
      a: "We primarily use Altium Designer and KiCad for PCB design. We also have expertise in Cadence Allegro for high-speed and RF designs, ensuring we use the best tool for your project."
    },
    {
      q: "Do you offer DFM (Design for Manufacturing) analysis?",
      a: "Yes, DFM analysis is included in all our designs. We ensure your PCB can be manufactured reliably and cost-effectively by following industry standards and manufacturer capabilities."
    }
  ];
  
  return (
    <div className="min-h-screen">
      <SEO 
        title="PCB Design Services | Several Sustain"
        description="Professional PCB design services including HDI, RF, and high-speed circuit board layout. Expert multilayer PCB design with signal integrity optimization and DFM analysis for reliable manufacturing."
        canonical="/services/design/pcb-design"
      />
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CircuitBoard className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="pcb-design-title">
              PCB Design Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert circuit board layout with HDI, RF, and high-speed design capabilities for complex applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional PCB Design</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our PCB design services combine cutting-edge technology with years of engineering expertise 
                to deliver circuit boards that meet the most demanding requirements. From simple single-layer 
                boards to complex multilayer HDI designs, we ensure optimal performance and manufacturability.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">High-density interconnect (HDI) design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">RF and microwave circuit design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">High-speed digital signal integrity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">EMI/EMC compliance design</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-get-quote">
                  Get Quote
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="PCB design and manufacturing" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Layers className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Multilayer Design</h3>
              <p className="text-muted-foreground">
                Complex multilayer PCB designs up to 32 layers with advanced stackup optimization 
                for signal integrity and power distribution.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">High-Speed Design</h3>
              <p className="text-muted-foreground">
                Specialized in high-speed digital design with DDR4/5 memory interfaces, 
                SerDes, and gigabit ethernet implementations.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">EMI/EMC Compliance</h3>
              <p className="text-muted-foreground">
                Design for electromagnetic compatibility with proper grounding, shielding, 
                and filtering techniques to meet international standards.
              </p>
            </GlassCard>
          </div>

          {/* Detailed Process Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our PCB Design Process</h2>
            <div className="space-y-8">
              <GlassCard className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileSearch className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</span>
                      <h3 className="text-xl font-bold text-foreground">Requirements Analysis</h3>
                      <span className="ml-auto text-sm text-muted-foreground">1-2 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive review of your specifications, performance requirements, environmental constraints, and budget. We analyze signal integrity needs, power distribution, and manufacturing constraints.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Specifications Review</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Constraints Analysis</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Budget Planning</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Pencil className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</span>
                      <h3 className="text-xl font-bold text-foreground">Schematic Design</h3>
                      <span className="ml-auto text-sm text-muted-foreground">3-5 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Complete circuit schematic creation with optimal component selection, electrical rule checking, and design review. We ensure proper circuit functionality before moving to layout.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Component Selection</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ERC Validation</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Design Review</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Layout className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</span>
                      <h3 className="text-xl font-bold text-foreground">PCB Layout & Routing</h3>
                      <span className="ml-auto text-sm text-muted-foreground">5-10 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Precision PCB layout with optimized component placement, intelligent routing, and comprehensive signal integrity analysis. We follow industry best practices for manufacturability.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Component Placement</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Signal Routing</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Power Distribution</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TestTube className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</span>
                      <h3 className="text-xl font-bold text-foreground">Design Verification</h3>
                      <span className="ml-auto text-sm text-muted-foreground">2-3 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive verification including DRC, electrical testing, thermal analysis, and signal integrity simulation to ensure design meets all requirements.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">DRC Check</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">SI Analysis</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Thermal Simulation</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">5</span>
                      <h3 className="text-xl font-bold text-foreground">Documentation & Delivery</h3>
                      <span className="ml-auto text-sm text-muted-foreground">1-2 days</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Complete manufacturing package preparation with Gerber files, BOM, assembly drawings, and comprehensive specifications for seamless production.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Gerber Files</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">BOM Generation</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Assembly Drawings</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured PCB Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of our recent PCB designs across various industries and applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="High-speed digital PCB design" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  10-Layer HDI
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">High-Speed Digital System</h3>
                <p className="text-muted-foreground mb-4">DDR4 memory interface with gigabit Ethernet for industrial IoT gateway</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-muted rounded">DDR4</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">GigE</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">Industrial</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="RF microwave PCB design" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  RF/Microwave
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">RF Communication Module</h3>
                <p className="text-muted-foreground mb-4">2.4GHz wireless communication board with impedance-controlled routing</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-muted rounded">2.4GHz</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">Impedance Control</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">Wireless</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Medical device PCB" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  IPC Class 3
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Medical Device Board</h3>
                <p className="text-muted-foreground mb-4">FDA-compliant medical device PCB with advanced signal integrity</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-muted rounded">Medical</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">FDA</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded">Class 3</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about our PCB design services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard key={index} className="overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="p-12 text-center max-w-4xl mx-auto">
            <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your PCB Design Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert PCB design services with fast turnaround and competitive pricing. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-pcb-contact">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" data-testid="button-view-case-studies">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PCBDesign;
