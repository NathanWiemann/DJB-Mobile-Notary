import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Shield, Star, FileText, Home, Building, Heart, CheckCircle, ArrowRight, Mail, Send, MessageCircle, AlertCircle } from 'lucide-react';

const Espanol = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({});

    try {
      // Create form data for Web3Forms
      const formDataToSend = new FormData();
      
      // Add your Web3Forms access key - replace with your actual key from web3forms.com
      formDataToSend.append('access_key', '66511e26-20ae-4532-a9d6-91fd64bedcde');
      
      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      // Add subject in Spanish
      formDataToSend.append('subject', `Solicitud de Servicio Notarial de ${formData.name}`);
      
      // Add from_name for better email formatting
      formDataToSend.append('from_name', 'Daniel J. Bolanos Mobile Notary Website (Español)');
      
      // Send to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Success
        setFormStatus({
          success: true,
          message: '¡Gracias por su mensaje! Me pondré en contacto con usted pronto para confirmar los detalles de su cita.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          location: '',
          date: '',
          time: '',
          message: ''
        });
      } else {
        // Error
        setFormStatus({
          success: false,
          message: data.message || 'Hubo un error al enviar su solicitud. Por favor intente de nuevo o llame directamente.'
        });
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        success: false,
        message: 'Hubo un error al enviar su solicitud. Por favor llame directamente al (914) 619-8328.'
      });
      setIsSubmitting(false);
    }
    
    setIsSubmitting(false);
  };

  const faqItems = [
    {
      question: "¿Cómo encuentro un notario cerca de mí?",
      answer: "¡Ya lo encontró! Soy un notario móvil local y puedo reunirme con usted donde sea más conveniente."
    },
    {
      question: "¿Qué documentos puede notarizar?",
      answer: "Desde declaraciones juradas y poderes hasta bienes raíces y documentos médicos - manejo la mayoría de actos notariales."
    },
    {
      question: "¿Puedo hacer todo en línea?",
      answer: "Sí - ofrezco notarización remota en línea que es legal en los 50 estados."
    },
    {
      question: "¿Qué necesito traer?",
      answer: "Una identificación con foto válida y su documento sin firmar."
    },
    {
      question: "¿Cuánto cuesta?",
      answer: "Los actos estándar comienzan en $5. Las tarifas de viaje móvil y servicio en línea varían. Todo es transparente y asequible."
    }
  ];

  const certifications = [
    {
      image: "/certified-background-screened-nna-badge.png",
      alt: "NNA Background Screened Certified"
    },
    {
      image: "/certified-nna-notary-signing-agent.png",
      alt: "NNA Certified Notary Signing Agent"
    },
    {
      image: "/certified-notary-signing-agent-seal.png",
      alt: "Certified Notary Signing Agent"
    },
    {
      image: "/notary-association-of-america-badge.png",
      alt: "Notary Association of America Member"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Notario Móvil
                <span className="text-teal-800 block">Profesional</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mt-6 leading-relaxed">
                Hola, soy Daniel J. Bolanos. Proporciono servicios de notario móvil con licencia, 
                fianza y seguro, con el cuidado personal y la atención que sus documentos importantes merecen.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 font-medium">Licenciado y Asegurado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-700 font-medium">Tardes y Fines de Semana</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-amber-500" />
                  <span className="text-gray-700 font-medium">Servicio Personal</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  to="/contact"
                  className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-center"
                >
                  Programar con Daniel
                </Link>
                <a
                  href="tel:+19146198328"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-center"
                >
                  Llamar: (914) 619-8328
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-2 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/daniel-bolanos-notary-profile-photo-bridge copy.webp" 
                  alt="Daniel J. Bolanos - Notario Móvil Profesional" 
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              
              {/* Logo Badge */}
              <div className="absolute -top-10 -right-10">
                <img 
                  src="/djb-mobile-notary-logo.png" 
                  alt="Daniel J. Bolanos Mobile Notary Logo" 
                  className="h-32 w-32"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Daniel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/daniel-bolanos-mobile-notary-outdoor-photo.png" 
                alt="Daniel J. Bolanos proporcionando servicios de notario profesionales" 
                className="w-full max-w-md mx-auto h-[500px] object-cover object-[center_-90px] rounded-2xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Conozca a Daniel J. Bolanos
                <span className="text-teal-800 block">Su Notario Personal</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Creo que la notarización es más que solo sellar documentos - se trata de brindar 
                tranquilidad durante momentos importantes en su vida. Con años de experiencia y un 
                compromiso con el servicio personal, estoy aquí para hacer que sus necesidades de 
                notarización sean lo más fluidas y sin estrés posible.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-800 rounded-full mt-2"></div>
                  <p className="text-gray-700">Comunicación directa - siempre trabajará conmigo personalmente</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-800 rounded-full mt-2"></div>
                  <p className="text-gray-700">Horarios flexibles para acomodar su vida ocupada</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-800 rounded-full mt-2"></div>
                  <p className="text-gray-700">Servicio paciente y completo con atención al detalle</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Conocer Más Sobre Daniel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios Que Proporciono
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde cierres de bienes raíces hasta documentos personales, manejo todas sus necesidades 
              de notarización con profesionalismo y cuidado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <FileText className="h-12 w-12 text-teal-800 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notarización de Documentos</h3>
              <p className="text-gray-600 mb-6">
                Testamentos, contratos, declaraciones juradas, poderes notariales y todos los documentos legales manejados con cuidado.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Home className="h-12 w-12 text-teal-800 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Servicios de Bienes Raíces</h3>
              <p className="text-gray-600 mb-6">
                Firmas de préstamos, refinanciamiento, compras de viviendas y transferencias de propiedades con experiencia.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="h-12 w-12 text-teal-800 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Servicio Móvil</h3>
              <p className="text-gray-600 mb-6">
                Voy a usted - casa, oficina, hospital o cualquier ubicación conveniente que funcione para usted.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Ver Todos los Servicios</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Personal Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por Qué Elegir a
                <span className="text-teal-800 block">Daniel J. Bolanos?</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cuando trabaja conmigo, no solo está obteniendo un notario - está obteniendo un profesional 
                dedicado que entiende que sus documentos representan momentos importantes en su vida. 
                Me tomo el tiempo para asegurarme de que todo se haga correctamente, responder sus preguntas 
                y brindarle la tranquilidad que merece.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-teal-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Licenciado y Asegurado</h3>
                    <p className="text-gray-600">
                      Notario público completamente licenciado con fianza de $100,000 y seguro de responsabilidad profesional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-teal-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Horarios Flexibles</h3>
                    <p className="text-gray-600">
                      Disponible tardes y fines de semana para acomodar su horario ocupado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Star className="h-8 w-8 text-teal-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Atención Personal</h3>
                    <p className="text-gray-600">
                      Siempre trabajará directamente conmigo - sin prisa, sin confusión, solo cuidado profesional.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/daniel-bolanos-traveling-notary-photo-rome.png" 
                alt="Daniel J. Bolanos - Notario Móvil Profesional" 
                className="w-full max-w-md mx-auto h-[500px] object-cover object-[center_-80px] rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Mis Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No solo tome mi palabra. Aquí está lo que mis clientes tienen que decir sobre el servicio 
              personal y profesional que han recibido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "¡Daniel hizo que el cierre de nuestra casa fuera mucho más fácil! Vino a nuestra casa por la noche después del trabajo 
                y explicó pacientemente cada documento. Su atención personal marcó toda la diferencia."
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                <p className="text-gray-600 text-sm">Cierre de Bienes Raíces</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Cuando mi padre necesitaba documentos notarizados mientras estaba en el hospital, Daniel fue increíblemente 
                compasivo y profesional. Verdaderamente agradecido por su servicio."
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Michael Rodriguez</h4>
                <p className="text-gray-600 text-sm">Documentos de Atención Médica</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/testimonials"
              className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Leer Más Reseñas</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿No Está Seguro Por Dónde Empezar?
            </h2>
            <p className="text-xl text-gray-600">
              Aquí están las respuestas a las preguntas más comunes que recibo de nuevos clientes.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Ver Todas las Preguntas</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo Para Comenzar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contácteme hoy para programar su cita de notarización. Estoy aquí para hacer el proceso 
              lo más fluido y conveniente posible para usted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-teal-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Llamar o Enviar Mensaje</h3>
              <a href="tel:+19146198328" className="text-teal-800 font-semibold text-xl">
                (914) 619-8328
              </a>
              <p className="text-gray-600 text-sm mt-2">Disponible durante horas de servicio</p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-teal-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Correo Electrónico</h3>
              <a href="mailto:contact@djb-mobile-notary.com" className="text-teal-800 font-semibold">
                contact@djb-mobile-notary.com
              </a>
              <p className="text-gray-600 text-sm mt-2">Respuesta dentro de 4 horas</p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-teal-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Disponibilidad</h3>
              <p className="text-gray-700">Días de semana: 5-8 PM</p>
              <p className="text-gray-700">Fines de semana: 9 AM-8 PM</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19146198328"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Llamar (914) 619-8328
              </a>
              <Link
                to="/contact"
                className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Programar En Línea
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img 
                src="/djb-mobile-notary-logo.png" 
                alt="Daniel J. Bolanos Mobile Notary Logo" 
                className="h-20 w-20"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Programemos Su
              <span className="text-teal-800 block">Cita de Notarización</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              ¿Listo para notarizar sus documentos? Estoy aquí para ayudar a hacer el proceso lo más conveniente 
              y sin estrés posible. Contácteme hoy para su servicio personal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19146198328"
                className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Llamar (914) 619-8328</span>
              </a>
              <a
                href="sms:+19146198328"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Enviar Mensaje de Texto</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Póngase en Contacto con Daniel</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Siempre estoy feliz de discutir sus necesidades de notarización y responder cualquier pregunta que pueda tener. 
                  Elija el método de contacto que funcione mejor para usted.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-teal-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Llamar o Enviar Mensaje</h4>
                    <a href="tel:+19146198328" className="text-teal-800 hover:text-teal-600 text-xl font-semibold">
                      (914) 619-8328
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Disponible durante horas de negocio para respuesta inmediata
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-teal-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Correo Electrónico</h4>
                    <a href="mailto:contact@djb-mobile-notary.com" className="text-teal-800 hover:text-teal-600">
                      contact@djb-mobile-notary.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Respuesta dentro de 4 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-teal-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Área de Servicio</h4>
                    <p className="text-gray-700">Área Local del Condado de Berks y Comunidades Circundantes</p>
                    <p className="text-gray-600 text-sm mt-1">Servicio móvil dentro de 25 millas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-teal-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Disponibilidad</h4>
                    <div className="text-gray-700">
                      <p><strong>Días de semana:</strong> 5:00 PM - 8:00 PM</p>
                      <p><strong>Fines de semana:</strong> 9:00 AM - 8:00 PM</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Horarios flexibles disponibles</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                <h4 className="font-bold text-teal-800 mb-4">Certificaciones Profesionales</h4>
                <div className="grid grid-cols-4 gap-4 items-center mb-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <img 
                        src={cert.image} 
                        alt={cert.alt}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-teal-700 text-sm">
                  Licenciado, con fianza, asegurado y verificado por antecedentes para su tranquilidad.
                </p>
              </div>

              {/* Personal Message */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                <h4 className="font-bold text-teal-800 mb-3">Una Nota Personal de Daniel</h4>
                <p className="text-teal-700 leading-relaxed">
                  "Entiendo que notarizar documentos a veces puede sentirse abrumador. Por eso estoy 
                  comprometido a hacer el proceso lo más simple y cómodo posible. No dude en comunicarse 
                  con cualquier pregunta - ¡estoy aquí para ayudar!"
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Programe Su Cita</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Su nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección de Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="su.correo@ejemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="(914) 619-8328"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio Necesario *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="document-notarization">Notarización de Documentos</option>
                      <option value="real-estate">Bienes Raíces/Firma de Préstamos</option>
                      <option value="business-documents">Documentos Comerciales</option>
                      <option value="personal-documents">Documentos Personales/Familiares</option>
                      <option value="other">Otro (especifique en el mensaje)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Ubicación Preferida para Reunirse *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Su casa, oficina, cafetería, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha Preferida *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Hora Preferida *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Seleccione preferencia de hora</option>
                      <option value="weekday-evening">Tarde de Día de Semana (5-8 PM)</option>
                      <option value="saturday-morning">Sábado por la Mañana (9 AM-12 PM)</option>
                      <option value="saturday-afternoon">Sábado por la Tarde (12-5 PM)</option>
                      <option value="saturday-evening">Sábado por la Noche (5-8 PM)</option>
                      <option value="sunday-morning">Domingo por la Mañana (9 AM-12 PM)</option>
                      <option value="sunday-afternoon">Domingo por la Tarde (12-5 PM)</option>
                      <option value="sunday-evening">Domingo por la Noche (5-8 PM)</option>
                      <option value="flexible">Soy flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Detalles Adicionales
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Por favor describa los documentos que necesita notarizar, cualquier requisito especial, o preguntas que tenga..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-800 hover:bg-teal-900 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Enviando Mensaje...' : 'Enviar Mensaje a Daniel'}</span>
                </button>

                <p className="text-sm text-gray-600 text-center">
                  Normalmente respondo dentro de 4 horas para confirmar los detalles de su cita.
                </p>
                
                {/* Form Status Message */}
                {formStatus.message && (
                  <div className={`mt-4 p-4 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    <div className="flex items-center space-x-2">
                      {formStatus.success ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      )}
                      <p>{formStatus.message}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Nota Importante</h3>
            <p className="text-teal-700">
              Aunque puedo comunicarme en español para programar citas y explicar el proceso, 
              todos los documentos deben estar en inglés o acompañados de una traducción certificada 
              para la notarización. Esto es un requisito legal para todos los notarios.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Espanol;