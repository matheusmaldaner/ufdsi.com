'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "DSI Member's SAMSARA Wins Sentient LLM Hackathon",
    date: "March 2024",
    description: "In a remarkable achievement, a DSI member developed SAMSARA, an innovative AI system that secured the top position at the Sentient LLM Hackathon. The project showcases advanced natural language processing capabilities and demonstrates the exceptional talent within our organization. This victory not only brings recognition to our club but also highlights UF's growing prominence in the field of artificial intelligence.",
    image: "/images/news/samsara-win.jpg",
    link: "https://sentient.org/hackathon",
    category: "Achievement"
  }
];

const NewsCard = ({ item }: { item: NewsItem }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
    {item.image && (
      <div className="relative h-64 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-20"></div>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
    )}
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300">
          {item.category}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {item.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {item.description}
      </p>
      {item.link && (
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          Learn More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </div>
  </div>
);

const News = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest News & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest developments, achievements, and milestones from our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News; 