'use client';

import { useState } from "react";
import { Tab } from '@headlessui/react';

type Person = {
  name: string;
  position?: string;
  linkedIn?: string;
  image?: string;
  year?: string;
};

interface ExecBoard {
  year: string;
  displayName: string;
  members: Person[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const PersonCard = ({ person }: { person: Person }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl group hover:translate-y-[-5px] w-full max-w-[280px]">
    <div className="h-56 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      <img
        src={person.image || "https://via.placeholder.com/280x224"}
        alt={person.name}
        className="w-full h-full object-cover object-center"
      />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{person.name}</h3>
      {person.position && (
        <span className="inline-flex items-center rounded-full bg-teal-100 dark:bg-teal-900 px-3 py-1 text-sm font-medium text-teal-800 dark:text-teal-300 mb-4">
          {person.position}
        </span>
      )}
      <div className="flex items-center mt-4">
        {person.linkedIn && (
          <a
            href={person.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center text-sm"
          >
            <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        )}
      </div>
    </div>
  </div>
);

const executives: Person[] = [
  {
    name: "Matheus Maldaner",
    position: "President",
    linkedIn: "https://www.linkedin.com/in/matheusmaldaner/",
    image: "/images/people/matheus.jpeg"
  },
  {
    name: "Kaavya Polavarapu",
    position: "Internal Vice President",
    linkedIn: "https://www.linkedin.com/in/kaavya-polavarapu/",
    image: "/images/people/kaavya.jpeg"
  },
  {
    name: "Harry Tsao",
    position: "External Vice President",
    linkedIn: "https://www.linkedin.com/in/harrytsao/",
    image: "/images/people/harry.jpeg"
  },
  {
    name: "Michele Hirn",
    position: "Treasurer",
    linkedIn: "https://www.linkedin.com/in/michele-hirn/",
    image: "/images/people/michele.jpeg"
  },
  {
    name: "Ishan Kumthekar",
    position: "Workshop Director",
    linkedIn: "https://www.linkedin.com/in/ishan-kumthekar-080827255/",
    image: "/images/people/ishan.jpeg"
  },
  {
    name: "Aaron Goffstein",
    position: "Networking Director",
    linkedIn: "https://www.linkedin.com/in/aaron-goffstein/",
    image: "/images/people/aaron.jpeg"
  },
  {
    name: "Sanjana Dundigalla",
    position: "Secretary",
    linkedIn: "https://www.linkedin.com/in/sanjana-dundigalla/",
    image: "/images/people/sanjana.jpeg"
  },
];

type JuniorRole = {
  title: string;
  members: Person[];
};

const juniorRoles: JuniorRole[] = [
  {
    title: "Workshop Coordinators",
    members: [
      { name: "Cecilia Cardenas", linkedIn: "https://www.linkedin.com/in/cecilia-elena-cardenas/", image: "/images/people/cecilia.jpeg" },
      { name: "Marc Marquez", linkedIn: "https://www.linkedin.com/in/marc--marquez/", image: "/images/people/marc.jpeg" },
      { name: "Aadhitya Vijaisenthi", linkedIn: "https://www.linkedin.com/in/aadhitya-vijaisenthil/", image: "/images/people/aadhitya.jpeg" },
      { name: "Tristan Pank", linkedIn: "https://www.linkedin.com/in/tristan-pank/", image: "/images/people/tristan.jpeg" }
    ]
  },
  {
    title: "Social Media Coordinators",
    members: [
      { name: "Safi Ali", linkedIn: "https://www.linkedin.com/in/safi-ali-026b71325/", image: "/images/people/safi.jpeg" },
      { name: "Kaylee Pekar", linkedIn: "https://www.linkedin.com/in/kayleepekar/", image: "/images/people/kaylee.jpeg" },
      { name: "Ron Beck", linkedIn: "https://www.linkedin.com/in/ronald-beck-156691321/", image: "/images/people/ron.jpeg" },
      { name: "Carlos Jusino", linkedIn: "https://www.linkedin.com/in/carlosdjusino/", image: "/images/people/carlos.jpeg" }
    ]
  },
  {
    title: "Sponsorship Coordinators",
    members: [
      { name: "Pranav Bhargava", linkedIn: "https://www.linkedin.com/in/pranavb15/", image: "/images/people/pranav.jpeg" },
      { name: "Grace Cavarretta", linkedIn: "https://www.linkedin.com/in/grace-cavarretta/", image: "/images/people/grace.jpeg" },
      { name: "Brianna Fraga", linkedIn: "https://www.linkedin.com/in/brianna-fraga/", image: "/images/people/brianna.jpeg" },
      { name: "Neha Jupalli", linkedIn: "https://www.linkedin.com/in/neha-jupalli-610063329/", image: "/images/people/neha.jpeg" }
    ]
  },
  {
    title: "Networking Coordinators",
    members: [
      { name: "Samantha Villafane", linkedIn: "https://www.linkedin.com/in/samantha-villafane-b8338b255/", image: "/images/people/samantha.jpeg" },
      { name: "Misha Shah", linkedIn: "https://www.linkedin.com/in/misha-s-shah/", image: "/images/people/misha.jpeg" },
      { name: "Divij Goyal", linkedIn: "https://www.linkedin.com/in/divij-goyal23/", image: "/images/people/divij.jpeg" },
      { name: "Bryson McGinley", linkedIn: "https://www.linkedin.com/in/brysonmcginley/", image: "/images/people/bryson.jpeg" },
      { name: "Andria Gonzalez Lopez", linkedIn: "https://www.linkedin.com/in/andria-gonzalez-lopez-79713b21b/", image: "/images/people/andria.jpeg" }
    ]
  },
  {
    title: "Webmasters",
    members: [
      { name: "Autumn Qiu", linkedIn: "https://www.linkedin.com/in/autumn-qiu/", image: "/images/people/autumn.jpeg" },
      { name: "Suchir Kolli", linkedIn: "https://www.linkedin.com/in/suchir-kolli-9a5288293/", image: "/images/people/suchir.jpeg" },
      { name: "Carlos Hernandez", linkedIn: "https://www.linkedin.com/in/carlos-hernandez2/", image: "/images/people/carlos-h.jpeg" }
    ]
  },
  {
    title: "Event Coordinators",
    members: [
      { name: "Analise Stuart", linkedIn: "https://www.linkedin.com/in/analise-stuart-366425301/", image: "/images/people/analise.jpeg" },
      { name: "My Pham", linkedIn: "https://www.linkedin.com/in/my-pham-8554b8278/", image: "/images/people/my.jpeg" },
      { name: "Sandra Hanushchik", linkedIn: "https://www.linkedin.com/in/sandra-hanuschik/", image: "/images/people/sandra.jpeg" },
      { name: "Shravya Sama", linkedIn: "https://www.linkedin.com/in/shravya-sama-7850a0217/", image: "/images/people/shravya.jpeg" }
    ]
  },
];

const execBoards: ExecBoard[] = [
  {
    year: "2015-2016",
    displayName: "2015-2016 Founding Board",
    members: [
      {
        name: "Damiem Chamness",
        position: "President/Founder (Fall)",
        linkedIn: "https://www.linkedin.com/in/damiem/",
        image: "/images/alumni/2015-2016/damiem_chamness.jpg",
        year: "2015-2016"
      },
      {
        name: "Jack Kendall",
        position: "President (Spring)",
        linkedIn: "https://www.linkedin.com/in/jack-kendall-2107287/",
        image: "/images/alumni/2015-2016/jack_kendall.jpg",
        year: "2015-2016"
      },
      {
        name: "Nicolas Hureira",
        position: "Vice President External",
        linkedIn: "https://www.linkedin.com/in/nhureira/",
        image: "/images/alumni/2015-2016/nicolas_hureira.jpg",
        year: "2015-2016"
      },
      {
        name: "Gavin O'Leary",
        position: "Vice President Internal",
        linkedIn: "https://www.linkedin.com/in/gavin-o-leary-a5788131/",
        image: "/images/alumni/2015-2016/gavin_oleary.jpg",
        year: "2015-2016"
      },
      {
        name: "Talia Brown",
        position: "Treasurer",
        image: "/images/alumni/2015-2016/talia_brown.jpg",
        year: "2015-2016"
      },
      {
        name: "Ya Zhang",
        position: "Secretary",
        linkedIn: "https://www.linkedin.com/in/yazhang1/",
        image: "/images/alumni/2015-2016/ya_zhang.jpg",
        year: "2015-2016"
      }
    ]
  },
  // ... other exec boards data ...
];

const Team = () => {
  const [selectedYear, setSelectedYear] = useState("2015-2016");

  return (
    <div className="bg-white dark:bg-gray-dark py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The dedicated individuals who drive our mission forward and make our community thrive.
          </p>
        </div>

        {/* Section for Executives */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white inline-block relative">
              Executive Board
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {executives.map((person, index) => (
              <PersonCard key={`exec-${index}`} person={person} />
            ))}
          </div>
        </div>

        {/* Section for Junior Board */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white inline-block relative">
              Junior E-Board
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></span>
            </h3>
          </div>
          
          <div className="space-y-20">
            {juniorRoles.map((role, roleIndex) => (
              <div key={`role-${roleIndex}`}>
                <div className="text-center mb-8">
                  <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200 inline-block px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-700 shadow-sm">
                    {role.title}
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                  {role.members.map((person, index) => (
                    <PersonCard key={`${role.title}-${index}`} person={person} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section for Alumni */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white inline-block relative">
              Alumni Network
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></span>
            </h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the graduates and past executive boards who have shaped our organization.
            </p>
          </div>

          <div className="mx-auto w-full max-w-5xl">
            <Tab.Group selectedIndex={execBoards.findIndex(board => board.year === selectedYear)} onChange={index => setSelectedYear(execBoards[index].year)}>
              <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
                <Tab.List className="flex overflow-x-auto space-x-1 p-1 scrollbar-hide">
                  {execBoards.map((board) => (
                    <Tab
                      key={board.year}
                      className={({ selected }) =>
                        classNames(
                          'py-3 px-4 text-sm font-medium whitespace-nowrap flex-shrink-0',
                          'focus:outline-none',
                          selected
                            ? 'text-teal-600 border-b-2 border-teal-500 dark:text-teal-400 dark:border-teal-400'
                            : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
                        )
                      }
                    >
                      {board.year}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels>
                {execBoards.map((board, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      'rounded-xl',
                      'focus:outline-none'
                    )}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        {board.displayName}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {board.members.map((member, index) => (
                          <PersonCard key={`alumni-${board.year}-${index}`} person={member} />
                        ))}
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
