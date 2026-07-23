import type { PrivacyPolicy } from "@/content/apps";

export const happyPickPolicyEn: PrivacyPolicy = {
  title: "Happy Pick Privacy Policy",
  updatedAt: "July 2026",
  updatedLabel: "Last updated",
  description:
    "Happy Pick is a journal app for recording small moments of happiness that can be used without creating an account or signing in. Most data is stored and processed only on the user’s device.",
  intro: [
    'Chamyworks (the "Developer") values users’ privacy and complies with applicable laws and regulations.',
    'Happy Pick (the "App") is a journal app for recording small moments of happiness that can be used without creating an account or signing in. Most data is stored and processed only on the user’s device.',
    "This Privacy Policy explains the information processed by Happy Pick and the purposes for which it is used.",
  ],
  sections: [
    {
      title: "1. Information Stored in the App",
      paragraphs: [],
      blocks: [
        {
          type: "paragraph",
          text: "Happy Pick may store the following information on the user’s device to provide the service.",
        },
        {
          type: "list",
          items: [
            "Happy moment entries created by the user",
            "Entry dates",
            "Hashtags",
            "Monthly and yearly record data",
            "Settings required to use the App",
            "Data required for backup and import features",
          ],
        },
        {
          type: "paragraph",
          text: "This information is stored on the user’s device, not on the Developer’s server.",
        },
      ],
    },
    {
      title: "2. Data Storage",
      paragraphs: [
        "Happy Pick does not provide account registration, sign-in, or server storage.",
        "Happy moment entries and related data created by the user are stored on the user’s device.",
        "The availability and method of device backups may vary depending on the user’s operating system settings.",
        "The Developer does not separately collect users’ happy moment entries or store them on a server.",
      ],
    },
    {
      title: "3. Backup and Import Features",
      paragraphs: [],
      blocks: [
        {
          type: "paragraph",
          text: "When a user uses the backup feature, the backup file may contain the following information.",
        },
        {
          type: "list",
          items: [
            "Happy moment entries",
            "Entry dates",
            "Hashtags",
            "Monthly and yearly record data",
            "App settings",
          ],
        },
        {
          type: "paragraph",
          text: "A backup file is transmitted outside the App only when the user chooses to save or share it.",
        },
        {
          type: "paragraph",
          text: "When a user uses the import feature, data from the selected backup file may be stored in the App.",
        },
      ],
    },
    {
      title: "4. Sharing Personal Information with Third Parties",
      paragraphs: [
        "The Developer does not sell or disclose users’ personal information to third parties.",
        "Happy moment entries and other app data are not transmitted to the Developer’s server.",
        "However, if a user saves a backup file to an external location or shares it, the data may be transmitted to the service or storage location selected by the user.",
      ],
    },
    {
      title: "5. Retention and Deletion",
      paragraphs: [
        "Data within the App is stored on the user’s device.",
        "Users can delete or reset stored data through features provided in the App.",
        "Deleting the App also deletes the data stored within the App.",
        "Backup files that users have saved externally are not deleted automatically and must be deleted by the user.",
      ],
    },
    {
      title: "6. External Services",
      paragraphs: [],
      blocks: [
        {
          type: "paragraph",
          text: "Happy Pick for iOS 1.2 and Android 1.0 or later bundles the Pretendard and MaruBuri font files with the app and loads them locally. In these versions, no network connection information is sent to external font providers for displaying the fonts.",
        },
        {
          type: "paragraph",
          text: "Earlier iOS versions may load external font resources from jsDelivr (Pretendard) and NAVER (MaruBuri). During this process, standard network information, such as an IP address, may be processed in accordance with each provider’s privacy policy. Happy Pick does not send users’ entries, tags, app settings, or other in-app data to these providers.",
        },
        {
          type: "paragraph",
          text: "Other than the services described above, Happy Pick currently does not use the following services.",
        },
        {
          type: "list",
          items: [
            "Account registration or sign-in",
            "Cloud storage",
            "Advertising SDKs",
            "User behavior analytics",
            "Crash reporting",
            "AI-based processing",
            "Uploading users’ entries to a server",
          ],
        },
        {
          type: "paragraph",
          text: "If any of these features are added in the future, this Privacy Policy will be updated accordingly.",
        },
      ],
    },
    {
      title: "7. Data Protection",
      paragraphs: [
        "The Developer complies with applicable laws and regulations and continuously applies reasonable safeguards to protect users’ personal information.",
      ],
    },
    {
      title: "8. Changes to This Privacy Policy",
      paragraphs: [
        "This Privacy Policy may be revised due to changes in applicable laws or the service.",
        "Material changes will be announced through the App or the website.",
      ],
    },
    {
      title: "9. Contact",
      paragraphs: [
        "Service: Happy Pick",
        "Developer: Chamyworks",
        "Contact: help@chamyworks.com",
      ],
    },
  ],
  contact: {
    name: "Chamyworks",
    email: "help@chamyworks.com",
  },
};
