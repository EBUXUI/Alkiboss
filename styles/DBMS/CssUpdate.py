import os
import sys
import json
from datetime import datetime

# Wrong and corrected strings
WRONG_LINE = "Blue"
CORRECT_LINE = "Green"

# JSON log file
LOG_FILE = "css_background_fixes.json"
LOG_DATA = {"fixes": []}

def process_file(file_path: str):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if WRONG_LINE not in content:
        print(f"ℹ️ No changes in: {file_path}")
        return

    # Replace occurrences
    new_content = content.replace(WRONG_LINE, CORRECT_LINE)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    # Log the change
    LOG_DATA["fixes"].append({
        "file": file_path,
        "replacements": {
            "from": WRONG_LINE,
            "to": CORRECT_LINE
        }
    })

    print(f"✅ Fixed: {file_path}")

def process_folder(parent_folder: str):
    for root, _, files in os.walk(parent_folder):
        for file in files:
            if file.endswith(".css"):
                process_file(os.path.join(root, file))

    # Save log if any fixes occurred
    if LOG_DATA["fixes"]:
        LOG_DATA["timestamp"] = datetime.utcnow().isoformat()
        with open(LOG_FILE, "w", encoding="utf-8") as f:
            json.dump(LOG_DATA, f, indent=2)
        print(f"📝 Fixes logged in {LOG_FILE}")
    else:
        print("ℹ️ No CSS issues found in project.")

if __name__ == "__main__":
    parent_folder = os.getcwd() if len(sys.argv) == 1 else sys.argv[1]
    process_folder(parent_folder)
