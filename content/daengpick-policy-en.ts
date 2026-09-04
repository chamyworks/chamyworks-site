import type { PrivacyPolicy } from "@/content/apps";

export const daengPickPolicyEn: PrivacyPolicy = {
  title: "Daeng Pick Privacy Policy",
  updatedAt: "September 4, 2026",
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
            "Whether you have acknowledged certain feature tips",
            "Information needed to verify and restore purchase entitlements and prevent duplicate transaction processing (see Section 7)",
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
      paragraphs: [
        "When importing photos, the App uses the iOS system photo picker and uses only the photos you select for editing. It does not request access to your entire photo library in advance as part of this process.",
        "When saving a finished photo, the App requests permission to add photos to Photos. This permission does not allow the App to read your entire existing photo library. If you do not grant permission, the App will not save the photo to Photos. You can change this permission in your device settings.",
      ],
    },
    {
      title: "4. Photo Processing and Storage",
      paragraphs: [
        "Photos you take or select are edited locally on your device.",
        "Finished photos are newly generated JPEG images and are saved to Photos only when you choose to save them.",
        "The App does not intentionally copy the original photo\u2019s location data (GPS) or camera metadata (EXIF) into the finished image, and it does not transmit such information to the Developer\u2019s servers.",
        "Temporary image copies may be created in the App's private storage when taking, importing, editing, or sharing photos. The App cleans up these copies when they are no longer needed, such as when editing is canceled or saving is completed. Copies needed to retry a failed save are retained. If copies remain after an unexpected termination or a failed deletion, the App attempts to clean them up the next time it is launched. This process does not delete your original photos in Photos.",
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
            "Your email address and the name displayed in the email, if any",
            "The subject and contents of your inquiry",
            "Files you choose to attach",
            "App version and build number",
            "Operating system and version",
            "Device manufacturer and model",
            "App language",
          ],
        },
        {
          type: "paragraph",
          text: "Selecting Contact Support opens an email draft prefilled with the app version and build number, operating system and version, device manufacturer and model, and app language. You can review or edit the contents. The email is sent to the Developer only if you choose to send it in your email app. Photos, unique device identifiers, and location information are not automatically attached to the draft.",
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
        { type: "subheading", text: "In-App Purchases" },
        {
          type: "paragraph",
          text: "Apple App Store processes payments. The Developer does not directly collect or store payment card information or Apple account credentials. To verify and restore purchase entitlements and prevent duplicate transaction processing, the App stores product identifiers, transaction identifiers, verification timestamps, and a limited list of already-processed transaction identifiers on your device. This information is not sent to the Developer's servers. Necessary operations, including purchases and restorations, are handled through Apple StoreKit.",
        },
      ],
    },
    {
      title: "8. Retention and Deletion",
      paragraphs: [
        "App settings are stored locally on your device.",
        "Uninstalling the App deletes settings and temporary data stored in the App\u2019s private storage.",
        "Finished photos saved to Photos remain in your photo library until you delete them yourself.",
        "Purchase verification data stored in the App is separate from the purchase history managed by Apple. Uninstalling the App does not delete the purchase history managed by Apple. Apple's policies govern the handling of that information.",
        "Information related to an inquiry is retained only as long as necessary to handle the inquiry and review related correspondence, and is deleted within one year from the date the inquiry is received, unless a longer retention period is required by applicable law.",
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
      ],
    },
  ],
  contact: {
    name: "Chamyworks",
    email: "help@chamyworks.com",
  },
};
