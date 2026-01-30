import { showHUD, showToast, Toast, Clipboard, getPreferenceValues } from "@raycast/api";
import { execSync } from "child_process";

interface Preferences {
  fabricPath: string;
}

export default async function Command() {
  const { fabricPath } = getPreferenceValues<Preferences>();
  const text = await Clipboard.readText();

  if (!text?.trim()) {
    await showHUD("Clipboard is empty");
    return;
  }

  try {
    const result = execSync(`pbpaste | "${fabricPath}" --pattern clean_text -c`, {
      encoding: "utf-8",
      timeout: 30_000,
    });

    if (result.trim()) {
      await Clipboard.copy(result.trim());
      await showHUD("Text cleaned and copied");
    } else {
      await showHUD("No output from fabric");
    }
  } catch (err) {
    await showToast({ style: Toast.Style.Failure, title: "Failed to clean text", message: String(err) });
  }
}
