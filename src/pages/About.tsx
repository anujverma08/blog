import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Film, Users, PenTool, Eye } from 'lucide-react';
import CircularGallery from '../animation/CircularGallery';

const About = () => {
  useEffect(() => {
    document.title = 'About | CineScope Diaries';
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Only name and image for gallery
  const teamGalleryItems = [
    {
      name: "Eleanor Richards",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      name: "Marcus Chen",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      name: "Sophia Martinez",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      name: "David Hoffman",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      name: "Amara Washington",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      name: "Nadia Williams",
      image: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      {/* Header Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 mb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
              About CineScope Diaries
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Exploring the art of cinema through thoughtful analysis, reviews, and passionate discussions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-prose mx-auto"
        >
          <h2 className="text-3xl font-heading font-semibold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              At CineScope Diaries, we believe that cinema is more than entertainment—it's a powerful art form that shapes culture, challenges perspectives, and illuminates the human experience. Our mission is to explore film in all its dimensions, from analyzing groundbreaking cinematography to examining the cultural context of global cinema.
            </p>
            <p>
              Founded in 2025 by a group of film enthusiasts with diverse backgrounds, CineScope Diaries aims to bridge the gap between academic film criticism and accessible discussion. We seek to create a space where both seasoned cinephiles and casual moviegoers can discover new perspectives on the films they love and find pathways to exploring cinema they might have otherwise overlooked.
            </p>
            <p>
              We approach film criticism with curiosity, respect, and an understanding that subjective experience shapes how we all engage with art. Rather than declaring definitive judgments, we invite conversation and celebrate the multitude of ways films can be interpreted and appreciated.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="bg-white dark:bg-gray-950 py-20 mb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-gray-900 dark:text-white">
              Our Core Values
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide our approach to film criticism and community
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Film className="mb-4 text-red-600 dark:text-gold" size={32} />,
                title: "Artistic Appreciation",
                description: "We recognize cinema as a complex art form combining visual storytelling, sound, performance, and narrative in unique ways."
              },
              {
                icon: <Users className="mb-4 text-red-600 dark:text-gold" size={32} />,
                title: "Inclusive Perspective",
                description: "We celebrate diverse voices in cinema and criticism, acknowledging that different lived experiences create richer conversations about film."
              },
              {
                icon: <PenTool className="mb-4 text-red-600 dark:text-gold" size={32} />,
                title: "Thoughtful Analysis",
                description: "We go beyond simple recommendations to explore the technical craft, cultural context, and thematic depth of the films we discuss."
              },
              {
                icon: <Eye className="mb-4 text-red-600 dark:text-gold" size={32} />,
                title: "Curious Engagement",
                description: "We approach each film with openness, asking questions rather than making assumptions, and inviting readers to join the exploration."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center"
              >
                {value.icon}
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team - Circular Gallery */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The passionate film enthusiasts behind CineScope Diaries
          </p>
        </motion.div>
        <div className="w-full h-[500px] md:h-[600px]">
          <CircularGallery
            items={teamGalleryItems.map(member => ({
              image: member.image,
              text: member.name
            }))}
            bend={1.5}
            textColor="#fff"
            borderRadius={0.05}
            font="bold 24px DM Sans"
          />
        </div>
      </section>

      {/* Our Approach to Criticism */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-prose mx-auto"
          >
            <h2 className="text-3xl font-heading font-semibold mb-6 text-gray-900 dark:text-white">
              Our Approach to Film Criticism
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We believe that effective film criticism requires both passion and perspective. Our reviews and analysis aim to:
              </p>
              <ul>
                <li>
                  <strong>Contextualize</strong> each film within its genre, the filmmaker's body of work, and broader cultural conversations
                </li>
                <li>
                  <strong>Highlight</strong> the technical and artistic achievements that might be overlooked by casual viewers
                </li>
                <li>
                  <strong>Examine</strong> the storytelling techniques, themes, and character development that drive narrative impact
                </li>
                <li>
                  <strong>Consider</strong> diverse perspectives and how different audiences might engage with the work
                </li>
                <li>
                  <strong>Recognize</strong> that subjective experience shapes how we all respond to art
                </li>
              </ul>
              <p>
                We eschew the reductive nature of simple star ratings or thumbs up/down judgments. While our reviews do include a rating scale for quick reference, we believe the true value of criticism lies in the conversation it starts, not the final verdict it declares.
              </p>
              <p>
                Above all, we approach each film with curiosity and respect for the creative process. Even when we're critical, our goal is to engage thoughtfully with the filmmaker's intentions and explore what works and what doesn't—and why.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;