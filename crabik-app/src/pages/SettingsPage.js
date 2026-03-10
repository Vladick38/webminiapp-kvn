import React, { useState } from 'react';
import { ReactComponent as SettingsIcon } from '../assets/settings.svg';
import './SettingsPage.css';

const translations = {
  en: {
    pageTitle: 'Settings & Security',
    pageSubtitle: 'Manage Telegram linking and recovery settings.',
    overview: 'Overview',
    telegramID: 'Telegram ID',
    language: 'Language',
    created: 'Created',
    languageSettings: 'Language settings',
    accountFields: 'Account Fields',
    displayName: 'Display Name',
    username: 'Username',
    accessStatus: 'Access Status',
    accountStatus: 'Account status',
    botAccess: 'Bot access',
    updated: 'Updated',
    telegramLink: 'Telegram Link',
    verificationCode: 'Verification code',
    requestCode: 'Request Code',
    confirmLink: 'Confirm Link',
    passwordRecovery: 'Password Recovery via Telegram',
    recoveryEmail: 'Recovery Email',
    email: 'Email',
    saveEmail: 'Save Email',
    resendVerify: 'Resend Verify',
    confirmVerify: 'Confirm Verify',
  },
  ru: {
    pageTitle: 'Настройки и безопасность',
    pageSubtitle: 'Управляйте привязкой Telegram и восстановлением.',
    overview: 'Обзор',
    telegramID: 'Telegram ID',
    language: 'Язык',
    created: 'Создано',
    languageSettings: 'Настройки языка',
    accountFields: 'Поля аккаунта',
    displayName: 'Отображаемое имя',
    username: 'Имя пользователя',
    accessStatus: 'Статус доступа',
    accountStatus: 'Статус аккаунта',
    botAccess: 'Доступ бота',
    updated: 'Обновлено',
    telegramLink: 'Ссылка Telegram',
    verificationCode: 'Код подтверждения',
    requestCode: 'Запросить код',
    confirmLink: 'Подтвердить связь',
    passwordRecovery: 'Восстановление пароля через Telegram',
    recoveryEmail: 'Почта для восстановления',
    email: 'Почта',
    saveEmail: 'Сохранить почту',
    resendVerify: 'Повторно отправить',
    confirmVerify: 'Подтвердить',
  },
};

const SectionCard = ({ title, children }) => (
  <div className="section-card">
    {title && <h2 className="section-title">{title}</h2>}
    <div className="section-content">{children}</div>
  </div>
);

const SettingsPage = () => {
  const [lang, setLang] = useState('en');
  const [langSettingsOpen, setLangSettingsOpen] = useState(false);

  const t = translations[lang] || translations.en;

  const changeLanguage = (newLang) => {
    setLang(newLang);
    setLangSettingsOpen(false);
  };

  return (
    <div className="settings-page">
      <header className="settings-header">
        <h1>{t.pageTitle}</h1>
        <p>{t.pageSubtitle}</p>
      </header>
      <div className="cards-container">
        <SectionCard title={t.overview}>
          <div className="overview-grid">
            <div>
              <strong>{t.telegramID}</strong>
              <div>Not linked</div>
            </div>
            <div className="language-overview">
              <strong>{t.language}</strong>
              <div>
                {lang.toUpperCase()}{' '}
                <button
                  className="lang-settings-toggle"
                  onClick={() => setLangSettingsOpen((o) => !o)}
                >
                  <SettingsIcon className="settings-icon" />
                </button>
              </div>
            </div>
            <div>
              <strong>{t.created}</strong>
              <div>Mar 10, 2026</div>
            </div>
          </div>
          {langSettingsOpen && (
            <div className="language-controls">
              <button
                className="lang-button"
                onClick={() => changeLanguage('ru')}
              >
                RU
              </button>
              <button
                className="lang-button"
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <button
                className="lang-button auto"
                onClick={() => changeLanguage('auto')}
              >
                AUTO
              </button>
            </div>
          )}
        </SectionCard>

        <SectionCard title={t.accountFields}>
          <div className="field-group">
            <label>{t.displayName}</label>
            <input type="text" value="CrabSalad" readOnly />
          </div>
          <div className="field-group">
            <label>{t.username}</label>
            <input type="text" value="CrabSalad" readOnly />
          </div>
        </SectionCard>

        <SectionCard title={t.accessStatus}>
          <div className="status-list">
            <div>
              {t.accountStatus}:{' '}
              <span className="status active">ACTIVE</span>
            </div>
            <div>
              {t.botAccess}:{' '}
              <span className="status allowed">ALLOWED</span>
            </div>
            <div>
              {t.updated}: Mar 10, 2026
            </div>
          </div>
        </SectionCard>

        <SectionCard title={t.telegramLink}>
          <div className="field-group">
            <label>{t.telegramID}</label>
            <input type="text" placeholder="123456789" />
          </div>
          <div className="field-group">
            <label>{t.verificationCode}</label>
            <input type="text" placeholder="123456" />
          </div>
          <button className="accent-button">{t.requestCode}</button>
          <button className="accent-button">{t.confirmLink}</button>
        </SectionCard>

        <SectionCard title={t.passwordRecovery}>
          <button className="accent-button">
            {t.passwordRecovery}
          </button>
        </SectionCard>

        <SectionCard title={t.recoveryEmail}>
          <div className="field-group">
            <label>{t.email}</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="field-group">
            <label>{t.verificationCode}</label>
            <input type="text" placeholder="123456" />
          </div>
          <button className="accent-button">{t.saveEmail}</button>
          <button className="accent-button">{t.resendVerify}</button>
        </SectionCard>
      </div>
    </div>
  );
};

export default SettingsPage;
