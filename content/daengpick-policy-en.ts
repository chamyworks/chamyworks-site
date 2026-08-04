import type { PrivacyPolicy } from "@/content/apps";

export const daengPickPolicyEn: PrivacyPolicy = {
  title: "Daeng Pick Privacy Policy",
  updatedAt: "August 4, 2026",
  updatedLabel: "Last updated",
  description:
    "Daeng Pick can be used without creating an account or signing in. Photo editing and most data processing take place locally on your device.",
  intro: [
    "Chamyworks (\u201cDeveloper,\u201d \u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d) respects your privacy and is committed to handling information in accordance with applicable laws.",
    "Daeng Pick (\u201cApp\u201d) is a dog photography and photo-decorating app that can be used without creating an account or signing in. Photo editing and most data processing take place locally on your device.",
    "This Privacy Policy explains what information the App processes and how it is used.",
  ],
  sections: [
    {
      title: "1. Information Processed on Your Device",
      paragraphs: [],
      blocks: [
        {
          type: "paragraph",
          text: "The App may process the following information locally on your device to provide its features:",
        },
        {
          type: "list",
          items: [
            "Photos you take with the App",
            "Photos you select from Photos",
            "Text you enter while editing",
            "Selected frames, stickers, drawings, and enhancement settings",
            "Whether you have completed the first-use guide",
            "Your selected attention sound",
            "Your most recently selected frame",
            "Whether certain feature tips have been shown",
          ],
        },
        {
          type: "paragraph",
          text: "Photos and editing information are processed locally during the editing session and are not uploaded to the Developer\u2019s servers.",
        },
        {
          type: "paragraph",
          text: "The App does not continuously store finished photos in a separate in-app gallery.",
        },
      ],
    },
    {
      title: "2. Camera Permission",
      paragraphs: [],
      blocks: [
        {
          type: "paragraph",
          text: "The App may request access to the camera to provide the following features:",
        },
        {
          type: "list",
          items: ["Camera preview", "Taking photos", "Burst photography"],
        },
        {
          type: "paragraph",
          text: "Camera access is requested when it is needed to use a photography feature. You can change this permission at any time in your device settings.",
        },
      ],
    },
    {
      title: "3. Photo Library Permission",
      paragraphs: [],
      blocks: [
        {
          type: "paragraph",
          text: "The App may request access to Photos for the following purposes:",
        },
        { type: "paragraph", text: "Importing a photo:" },
        {
          type: "list",
          items: ["Importing an existing photo selected by you"],
        },
        { type: "paragraph", text: "Saving a photo:" },
        {
          type: "list",
          items: ["Saving a finished photo to Photos"],
        },
        {
          type: "paragraph",
          text: "The App uses photos you select for editing. It does not collect or upload your entire photo library to the Developer\u2019s servers.",
        },
        {
          type: "paragraph",
          text: "You can change photo access permissions at any time in your device settings.",
        },
      ],
    },
    {
      title: "4. Photo Processing and Storage",
      paragraphs: [
        "Photos you take or select are edited locally on your device.",
        "Finished photos are newly generated JPEG images and are saved to Photos only when you choose to save them.",
        "The App does not intentionally copy the original photo\u2019s location data (GPS) or camera metadata (EXIF) into the finished image, and it does not transmit such information to the Developer\u2019s servers.",
        "Temporary image files may be created in the device cache during burst photography, editing, and sharing. These files are deleted after the related operation is completed. If an operation does not finish normally, the files may be cleaned up the next time the App is launched.",
        "Photos saved to Photos are not automatically deleted when you uninstall the App.",
      ],
    },
    {
      title: "5. Sharing",
      paragraphs: [
        "An image is provided to another app or service only when you choose to use the sharing feature through the iOS share sheet.",
        "Any subsequent handling of the image is governed by the privacy policy of the service you select.",
        "The Developer does not separately collect the image you share or information about the service with which you share it.",
      ],
    },
    {
      title: "6. Contacting Support",
      paragraphs: [],
      blocks: [
        {
          type: "paragraph",
          text: "If you contact us by email, we may receive the following information:",
        },
        {
          type: "list",
          items: [
            "Your email address",
            "The subject and contents of your inquiry",
            "Files you choose to attach",
            "App version and build number",
            "Operating system and version",
            "App language",
          ],
        },
        {
          type: "paragraph",
          text: "We use this information only to review your inquiry, respond to you, and troubleshoot reported issues.",
        },
        {
          type: "paragraph",
          text: "Transmission and storage of the email may also be governed by the privacy policy of the email service you use.",
        },
        {
          type: "paragraph",
          text: "You may request access to or deletion of information submitted through a support inquiry by contacting help@chamyworks.com.",
        },
      ],
    },
    {
      title: "7. External Services and Disclosure to Third Parties",
      paragraphs: [],
      blocks: [
        { type: "paragraph", text: "The App currently does not use:" },
        {
          type: "list",
          items: [
            "Account registration or sign-in",
            "Developer-operated cloud photo storage",
            "Advertising SDKs",
            "User behavior analytics",
            "Crash-reporting services",
            "Server-based AI image processing",
            "Automatic uploading of user photos",
          ],
        },
        {
          type: "paragraph",
          text: "The Developer does not sell your photos or App usage information or disclose them to third parties at its own discretion.",
        },
        {
          type: "paragraph",
          text: "When you choose to use sharing or contact support, information may be processed by the app, service, or email provider you select.",
        },
      ],
    },
    {
      title: "8. Retention and Deletion",
      paragraphs: [
        "App settings are stored locally on your device.",
        "Uninstalling the App deletes settings and temporary data stored in the App\u2019s private storage.",
        "Finished photos saved to Photos remain in your photo library until you delete them yourself.",
        "To request deletion of information submitted through a support inquiry, contact help@chamyworks.com.",
      ],
    },
    {
      title: "9. Security",
      paragraphs: [
        "We apply reasonable safeguards and comply with applicable laws to protect information handled in connection with the App.",
        "Photo editing is performed locally, and user photos are not transmitted to the Developer\u2019s servers.",
      ],
    },
    {
      title: "10. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy to reflect changes to applicable laws or App features.",
        "We will provide notice of material changes through the App or our website.",
      ],
    },
    {
      title: "11. Contact",
      paragraphs: [
        "Service: Daeng Pick",
        "Developer: Chamyworks",
        "Email: help@chamyworks.com",
        "Privacy Policy:",
        "https://chamyworks.com/apps/daengpick/privacy/en",
      ],
    },
  ],
  contact: {
    name: "Chamyworks",
    email: "help@chamyworks.com",
  },
};
