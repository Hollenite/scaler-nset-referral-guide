import React, { memo } from 'react';
import RevealSection from '../RevealSection';

const BULLET_POINTS = [
  'Software-focused learning environment',
  'Bengaluru-based campus with hostel accommodation nearby',
  'Peer group that is generally more coding-oriented',
  'Alternative route for students comparing JEE, CUET, private entrances, and other college options',
];

const About = memo(() => (
  <RevealSection id="about" num={1} title="What is Scaler School of Technology?">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start glass-panel rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:border-primary-light/30 transition-all duration-300">
      <div className="text-white/70 space-y-4">
        <p>
          Scaler School of Technology is a software-focused undergraduate path based in{' '}
          <strong className="text-white">Bengaluru</strong>. The major difference from a
          traditional BTech route is the curriculum focus — SST is much more centered around
          software development, computer science fundamentals, and problem solving early on.
        </p>
        <p>
          For many students, the real comparison is not just "good or bad" but whether they
          want a broader engineering route, or a more direct software-oriented environment
          from the start.
        </p>
      </div>
      <ul className="space-y-4 border-l border-white/10 pl-6 text-white/80">
        {BULLET_POINTS.map((item, i) => (
          <li
            key={i}
            className="relative before:content-[''] before:absolute before:-left-[24px] before:top-2.5 before:w-2 before:h-px before:bg-primary-light"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </RevealSection>
));

About.displayName = 'About';
export default About;
