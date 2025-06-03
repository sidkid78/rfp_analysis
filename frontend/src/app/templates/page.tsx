'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Download, FileText, Search, Star, Users, Clock, DollarSign } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  projectValue: string;
  timeline: string;
  complexity: 'Low' | 'Medium' | 'High';
  sections: number;
  downloads: number;
  rating: number;
  file?: string;
  featured?: boolean;
}

const templates: Template[] = [
  {
    id: 'cybersecurity-services',
    title: 'Cybersecurity Services RFP',
    category: 'Government Contracts',
    description: 'Comprehensive cybersecurity services including 24/7 SOC operations, threat detection, and incident response for enterprise environments.',
    features: [
      'FedRAMP/FISMA Compliance',
      'Security Clearance Requirements',
      'SOC Operations',
      'Threat Intelligence',
      'Incident Response',
      '18 Complete Sections'
    ],
    projectValue: '$15M - $25M',
    timeline: '5 years',
    complexity: 'High',
    sections: 18,
    downloads: 1247,
    rating: 4.9,
    file: '/sample_templates/cybersecurity_services_rfp.md',
    featured: true
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration Services RFP',
    category: 'Private Sector',
    description: 'Enterprise cloud migration and modernization services covering application refactoring, data migration, and multi-cloud architecture.',
    features: [
      'Multi-Cloud Strategy',
      'Application Modernization',
      'DevSecOps Implementation',
      'Data Migration',
      'Performance Optimization',
      '18 Complete Sections'
    ],
    projectValue: '$50M - $75M',
    timeline: '7 years',
    complexity: 'High',
    sections: 18,
    downloads: 934,
    rating: 4.8,
    file: '/sample_templates/cloud_migration_services_rfp.md',
    featured: true
  },
  {
    id: 'federal-it-services',
    title: 'Federal IT Services RFP',
    category: 'Government Contracts',
    description: 'Complete federal IT services template with all 18 sections including SOW, evaluation criteria, and compliance requirements.',
    features: [
      'FAR/DFARS Compliance',
      'Section 508 Requirements',
      'Security Requirements',
      'Small Business Goals',
      'Performance Standards',
      '18 Complete Sections'
    ],
    projectValue: '$10M - $50M',
    timeline: '5 years',
    complexity: 'High',
    sections: 18,
    downloads: 2156,
    rating: 4.9,
    featured: true
  },
  {
    id: 'ai-ml-services',
    title: 'AI/ML Development Services',
    category: 'Emerging Technologies',
    description: 'Artificial intelligence and machine learning development services including model training, deployment, and MLOps.',
    features: [
      'AI Ethics Framework',
      'Model Validation',
      'MLOps Pipeline',
      'Data Governance',
      'Bias Detection',
      'Performance Metrics'
    ],
    projectValue: '$5M - $15M',
    timeline: '3 years',
    complexity: 'High',
    sections: 16,
    downloads: 678,
    rating: 4.7
  },
  {
    id: 'software-development',
    title: 'Custom Software Development',
    category: 'Private Sector',
    description: 'Enterprise software development services with agile methodology, DevOps integration, and quality assurance.',
    features: [
      'Agile/Scrum Framework',
      'DevOps Integration',
      'Quality Assurance',
      'User Experience Design',
      'API Development',
      'Documentation Standards'
    ],
    projectValue: '$2M - $10M',
    timeline: '2-3 years',
    complexity: 'Medium',
    sections: 15,
    downloads: 1523,
    rating: 4.6
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Platform',
    category: 'Specialized Industries',
    description: 'Big data analytics platform development including data lakes, visualization tools, and predictive analytics.',
    features: [
      'Big Data Processing',
      'Real-time Analytics',
      'Data Visualization',
      'Predictive Modeling',
      'Data Governance',
      'Privacy Compliance'
    ],
    projectValue: '$8M - $20M',
    timeline: '4 years',
    complexity: 'High',
    sections: 17,
    downloads: 892,
    rating: 4.5
  },
  {
    id: 'blockchain-solutions',
    title: 'Blockchain Solutions',
    category: 'Emerging Technologies',
    description: 'Blockchain technology implementation for supply chain, digital identity, and smart contract applications.',
    features: [
      'Smart Contracts',
      'Consensus Mechanisms',
      'Digital Identity',
      'Supply Chain Tracking',
      'Cryptocurrency Integration',
      'Security Auditing'
    ],
    projectValue: '$3M - $12M',
    timeline: '3 years',
    complexity: 'High',
    sections: 14,
    downloads: 456,
    rating: 4.4
  },
  {
    id: 'iot-services',
    title: 'IoT Implementation Services',
    category: 'Specialized Industries',
    description: 'Internet of Things implementation including sensor networks, edge computing, and real-time monitoring.',
    features: [
      'Sensor Networks',
      'Edge Computing',
      'Real-time Monitoring',
      'Data Collection',
      'Device Management',
      'Predictive Maintenance'
    ],
    projectValue: '$4M - $15M',
    timeline: '3-4 years',
    complexity: 'Medium',
    sections: 16,
    downloads: 734,
    rating: 4.3
  }
];

const categories = ['All', 'Government Contracts', 'Private Sector', 'Specialized Industries', 'Emerging Technologies'];

const complexityColors = {
  Low: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
  Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
  High: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
};

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTemplates = templates.filter(template => template.featured);

  const handleDownload = async (template: Template) => {
    if (template.file) {
      try {
        console.log('Fetching template from:', template.file);
        const response = await fetch(template.file);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const content = await response.text();
        console.log('Content length:', content.length);
        console.log('Content preview:', content.substring(0, 100));
        
        // Check if we got HTML instead of markdown (indicating an error page)
        if (content.trim().startsWith('<!DOCTYPE html') || content.includes('<html')) {
          throw new Error('Received HTML instead of markdown - file may not exist');
        }
        
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${template.title.replace(/\s+/g, '_').toLowerCase()}.md`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        console.log('Download successful');
      } catch (error) {
        console.error('Download failed:', error);
        alert(`Download failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        // Fallback to the existing sample template
        window.open('/sample_templates/federal_it_services_rfp_template.md', '_blank');
      }
    } else {
      // Fallback for templates without specific files
      window.open('/sample_templates/federal_it_services_rfp_template.md', '_blank');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          RFP Templates Library
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional, comprehensive RFP templates covering all 18 essential sections. 
          Download ready-to-use templates that ensure compliance and maximize proposal quality.
        </p>
        
        {/* Stats */}
        <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <FileText className="h-4 w-4" />
            <span>2,500+ Active Templates</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>85% Success Rate</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>40% Time Savings</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign className="h-4 w-4" />
            <span>$2.1B Contract Value</span>
          </div>
        </div>
      </div>

      {/* Featured Templates */}
      {featuredTemplates.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <h2 className="text-2xl font-semibold">Featured Templates</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredTemplates.map((template) => (
              <Card key={template.id} className="relative border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 dark:border-yellow-800">
                <div className="absolute top-2 right-2">
                  <Badge className="bg-yellow-500 text-white dark:bg-yellow-600">Featured</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                      <CardDescription>{template.category}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span>{template.rating}</span>
                    </span>
                    <span>{template.downloads} downloads</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Project Value:</span>
                      <span className="font-medium">{template.projectValue}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{template.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Complexity:</span>
                      <Badge className={complexityColors[template.complexity]}>{template.complexity}</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {template.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{feature}</Badge>
                      ))}
                      {template.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">+{template.features.length - 3} more</Badge>
                      )}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleDownload(template)}
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="hover:shadow-lg transition-shadow dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  <CardDescription>{template.category}</CardDescription>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-current" />
                  <span>{template.rating}</span>
                </span>
                <span>{template.downloads} downloads</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{template.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Project Value:</span>
                  <span className="font-medium">{template.projectValue}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Timeline:</span>
                  <span className="font-medium">{template.timeline}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Sections:</span>
                  <span className="font-medium">{template.sections}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Complexity:</span>
                  <Badge className={complexityColors[template.complexity]}>{template.complexity}</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {template.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">{feature}</Badge>
                  ))}
                  {template.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">+{template.features.length - 3} more</Badge>
                  )}
                </div>
              </div>

              <Button 
                onClick={() => handleDownload(template)}
                className="w-full"
                variant="outline"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-muted-foreground">No templates found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
} 