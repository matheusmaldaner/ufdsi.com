'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'DSI wins student organization of the year',
    image: '/images/newsletter/grso-org-year25/1.jpeg',
    articleImage: '/images/newsletter/grso-org-year25/2.jpeg',
    description: `DSI was named Organization of the Year (GRSO) at this year's Student Involvement Awards across all UF student organizations! 🎉\n\nWe are honored and humbled to share this with all of you who have continuously supported us, whether by attending our workshops, competing alongside us at hackathons, or helping fund our initiatives.\n\nWe also want to congratulate our newly elected External Vice President, My Pham, on winning the Emerging Gator Award, which recognizes outstanding underclassmen leaders. We are so proud to have My on our team.\n\nThis award is a testament to the work we have been doing and the core belief that knowledge should be accessible to all.`,
  },
  {
    id: 2,
    title: "DSI member's chatbot SAMSARA wins AI hackathon",
    image: '/images/newsletter/samsara25/1.jpeg',
    articleImage: '/images/newsletter/samsara25/1.jpeg',
    description: `Join us in congratulating one of our students, Kalim Qazi, in winning first place nationally at Sentient's Hackathon!\n\n Across 7 days of public access, Samsara logged nearly 24 hours of total usage and received over 2,800 messages, all from organic traffic. We are extremely proud of you and of your hard work!`,
  },
  {
    id: 3,
    title: "DSI members win Best Visualization at DataFest 2025",
    image: '/images/newsletter/datafest25/1.jpg',
    articleImage: '/images/newsletter/datafest25/1.jpg',
    description: `Matheus Kunzler Maldaner, Ishan Kumthekar, Aadhitya Vijaisenthi, Aaron Goffstein and Adit Potta won Best Visualization at DataFest 2025!`,
  },
  {
    id: 4,
    title: "DSI members win Most Popular Award at 2024 AI Days Hackathon",
    image: '/images/newsletter/ai-days24/1.jpg',
    articleImage: '/images/newsletter/ai-days24/2.jpg',
    description: `Raul Valle, Landon Nayab, Matheus Kunzler Maldaner and Stephen Wormald won Most Popular Award for their FPGA Implementation of a Differentiable Logic Gate Neural Network.`,
  },
  {
    id: 5,
    title: "DSI members win Best AI Hack at SwampHacks 2025",
    image: '/images/newsletter/swamphacks25/1.jpg',
    articleImage: '/images/newsletter/swamphacks25/1.jpg',
    description: `DSI members Matheus Kunzler Maldaner, Kristian O'Connor, Danush Singla and Pranav Bhargava won the Best AI Hack at SwampHacks 2025, University of Florida's Largest Hackathon, by programming an interface to visualize the inner workings of Differentiable Logic Gate Neural Networks. `,
  },
  {
    id: 6,
    title: "DSI members win Most Popular Award at ShellHacks 2024",
    image: '/images/newsletter/shellhacks24/1.jpg',
    articleImage: '/images/newsletter/shellhacks24/2.jpg',
    description: `Thanks to the financial support of Dr. Juan Gilbert and CISE and AIIRI's collaboration, DSI was able to send 54 students to compete at ShellHacks 2024, Florida's largest hackathon with over 700 participants! DSI members Raul Valle, Matheus Kunzler Maldaner, Emily Jiji and Evan Partidas won the Most Popular project and several other UF students won specific company track prizes.`,
  },
  {
    id: 7,
    title: "DSI and UFIT hosted Nvidia Deep Learning Workshop",
    image: '/images/newsletter/nvidia-dli24/1.jpg',
    articleImage: '/images/newsletter/nvidia-dli24/2.jpg',
    description: `DSI and UFIT hosted a Deep Learning Workshop at Nvidia's Auditorium in Malachowsky Hall.The workshop was led by Matt Gitzendanner and attended by 400 students. At the end of this four part series, students who successfully completed the course were able to earn an official Nvidia Deep Learning Certificate for free!`,
  },
  {
    id: 8,
    title: "DSI members win Best Overall at DataFest 2024",
    image: '/images/newsletter/datafest24/2.jpg',
    articleImage: '/images/newsletter/datafest24/1.jpg',
    description: `Eric Chao, Justin Witter, Patrick Leiman, Matheus Kunzler Maldaner and Raul Valle won Best Overall at DataFest 2024!`,
  },
  {
    id: 9,
    title: "DSI members win Best AI Hack and 2nd Place Overall at OSC Mini Hackathon",
    image: '/images/newsletter/osc-minihack24/1.png',
    articleImage: '/images/newsletter/osc-minihack24/1.png',
    description: `DSI members Matheus Kunzler Maldaner, Raul Valle and Sebastian Sosa won the Best AI Hack and 2nd Place Overall at OSC Mini Hackathon by programming a Discord Bot that can use sentiment analysis to predict when undesired content is posted in a server.`,
  },
];

export default function NewsletterPage() {
  const [selected, setSelected] = useState(articles[0].id);
  const selectedArticle = articles.find(a => a.id === selected);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white drop-shadow-lg">DSI Newsletter</h1>
      <div className="w-full max-w-5xl px-4">
        <div className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide">
          {articles.map((article) => (
            <button
              key={article.id}
              onClick={() => setSelected(article.id)}
              className={`group flex-shrink-0 w-80 sm:w-96 rounded-2xl bg-white/30 dark:bg-gray-800/40 shadow-xl border border-white/20 dark:border-gray-700 backdrop-blur-md overflow-hidden transition-transform duration-300 relative focus:outline-none ${selected === article.id ? 'ring-4 ring-teal-400 scale-105' : 'hover:scale-105 hover:shadow-2xl'}`}
              style={{ minWidth: '320px', maxWidth: '380px' }}
            >
              <div className="relative w-full h-72 sm:h-96">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover object-center transition-all duration-300 group-hover:scale-110"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 rounded-b-2xl p-6 flex flex-col justify-end">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-teal-200 drop-shadow-lg mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-100 transition-colors duration-300 break-words whitespace-normal text-center w-full">
                  {article.title}
                </h2>
              </div>
            </button>
          ))}
        </div>
        {/* Article content below the scroll */}
        <div className="mt-10 flex flex-col items-center w-full">
          <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
            {selectedArticle.articleImage && (
              <div className="relative w-full h-64 sm:h-80 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={selectedArticle.articleImage}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover object-center"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-teal-200 mb-4 text-center drop-shadow-lg">
              {selectedArticle.title}
            </h2>
            {selectedArticle.description ? (
              <p className="text-gray-700 dark:text-teal-100 text-lg font-medium opacity-90 text-center whitespace-pre-line mb-2 break-words w-full">
                {selectedArticle.description}
              </p>
            ) : (
              <span className="text-teal-700 dark:text-teal-200 text-base font-medium opacity-90 text-center">Article coming soon!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 