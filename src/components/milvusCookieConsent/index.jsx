import React from 'react';
import CookieConsent from 'react-cookie-consent';
import * as styles from './milvusCookieConsent.module.less';
import { useTranslation } from 'react-i18next';

const MilvusCookieConsent = () => {
  const { t } = useTranslation('common');

  return (
    <CookieConsent
      buttonText="Accept"
      disableStyles
      containerClasses={styles.cookieContainer}
      buttonClasses={styles.button}
      buttonWrapperClasses={styles.buttonWrapper}
      expires={150}
    >
      <div className={styles.textContainer}>
        <p className={styles.headerContent}>{t('v3trans.cookie.title')}</p>
        <p className={styles.textContent}>{t('v3trans.cookie.desc')}</p>
      </div>
    </CookieConsent>
  );
};

export default MilvusCookieConsent;
