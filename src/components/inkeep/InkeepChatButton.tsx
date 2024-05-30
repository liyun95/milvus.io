import dynamic from 'next/dynamic';
import { InkeepChatButtonProps } from '@inkeep/widgets';
import { useInkeepSettings } from '@/hooks/use-inkeep-settings';

const ChatButton = dynamic(
  () => import('@inkeep/widgets').then(mod => mod.InkeepChatButton),
  {
    ssr: false,
  }
);

function InkeepChatButton() {
  const { baseSettings, aiChatSettings, searchSettings, modalSettings } =
    useInkeepSettings();

  const chatButtonProps: InkeepChatButtonProps = {
    stylesheetUrls: ['/inkeep/inkeep-overrides.css'],
    chatButtonBgColor: '#00a1ea',
    baseSettings,
    aiChatSettings,
    searchSettings,
    modalSettings,
  };

  return <ChatButton {...chatButtonProps} />;
}

export default function InkeepChatButtonContainer() {
  console.info('DISPLAY_INKEEP_WIDGET', process.env.DISPLAY_INKEEP_WIDGET);
  const displayInkeep =
    process.env.DISPLAY_INKEEP_WIDGET === 'true' ||
    process.env.NEXT_PUBLIC_DISPLAY_INKEEP_WIDGET === 'true';

  return <>{displayInkeep ? <InkeepChatButton /> : null}</>;
}
