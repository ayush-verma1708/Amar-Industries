import React from 'react';
import { LucideIcon } from 'lucide-react';

interface QualityFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const QualityFeature: React.FC<QualityFeatureProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default QualityFeature;