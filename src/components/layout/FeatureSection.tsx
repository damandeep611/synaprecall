import React from 'react';
import { motion } from 'framer-motion';
import { CubeIcon, SparklesIcon, BoltIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Intuitive Animations',
    description: 'Create smooth, natural animations with ease using our pre-built components and hooks.',
    icon: SparklesIcon,
  },
  {
    name: 'Responsive Design',
    description: 'Build fluid and adaptive UIs that look great on any device or screen size.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Performance Optimized',
    description: 'Enjoy silky-smooth animations without compromising on performance.',
    icon: BoltIcon,
  },
  {
    name: '3D Transformations',
    description: 'Take your UI to the next level with powerful 3D transformation capabilities.',
    icon: CubeIcon,
  },
];

const FeatureSection: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features for Modern UIs
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            MotionUI provides a comprehensive set of tools to create stunning, interactive user interfaces.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-purple-600 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

