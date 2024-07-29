

// components/MyIcon.js
import { DocumentIcon, DocumentTextIcon, DocumentPdfIcon } from '@heroicons/react/outline';

const MyIcon = ({ iconType }) => {
  const iconMap = {
    document: DocumentIcon,
    text: DocumentTextIcon,
    pdf: DocumentPdfIcon,
  };

  const IconComponent = iconMap[iconType] || DocumentIcon;

  return <IconComponent className="h-6 w-6 text-gray-500" />;
};

export default MyIcon;