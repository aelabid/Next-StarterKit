import { useColorModeValue } from '@chakra-ui/react';
const I18nIcon = () => {
  const fillColor = useColorModeValue('#2563eb', '#60A5FA');
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke={fillColor}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );
};
export default I18nIcon;
