"use client";

import styles from "@/styles/Search/Home.module.css";

import CSS from "@/styles/White/Home.module.css";
import { useState, useEffect } from "react";
import DefineColumnsTitle from "./DefineColumnsTitle";
import ImageCss from "@/styles/White/Main.module.css";
import Link from "next/link";
/*----- Server Actions ------*/
import { Router, useRouter } from "next/router";
import { useRouter as navRouter } from "next/navigation";
import PrintingAccessories from "@/UI-Features/UI-Gallery/Luvra/RefineEntry.jpg";
import Image from "next/image";
import GenerateBlueprintBtn from "./GenerateBlueprintBtn";
import GenerateBlueprintName from "./GenerateBlueprintName";

interface Column {
  name: string;
  type: string;
  nullable: boolean;
}

interface BlueprintBarProps {
  onDbNameChange: (name: string) => void;
  onColumnsChange: (columns: Column[]) => void;
  setActivePage: (page: "UseEntries" | "UseClauses") => void;
}

export default function BlueprintBar({
  onDbNameChange,
  setActivePage,
  onColumnsChange,
}: BlueprintBarProps) {
  const [dbName, setDbName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [columns, setColumns] = useState<Column[]>([]);
  const [BlueprintName, setBluePrintName] = useState<string>("");
  const [activateVerticalPanel, setactivateVerticalPanel] = useState(false);
  const [previewVerticalPanel, setpreviewVerticalPanel] = useState(false);

  useEffect(() => {
    const dropConfig = () => {
      activateVerticalPanel && setactivateVerticalPanel(false);
    };
    Router.events.off("routeChangeStart", dropConfig);
    return () => {
      Router.events.on("routeChangeStart", dropConfig);
    };
  }, [Router, activateVerticalPanel]);

  useEffect(() => {
    const dropConfig = () => {
      previewVerticalPanel && setpreviewVerticalPanel(false);
    };
    Router.events.off("routeChangeStart", dropConfig);
    return () => {
      Router.events.on("routeChangeStart", dropConfig);
    };
  }, [Router, previewVerticalPanel]);

  const imageData = [
    {
      src: PrintingAccessories,
      bg: PrintingAccessories,
      alt: "Finanvra",
      title: "Import Data",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
      button: "/LaunchingSoon",
      buttonRef: "Import Data",
    },
  ];
  const ImageCard = ({
    bg,
    alt,
    title,
    link,
    preview,
    button,
    buttonRef,
  }: any) => (
    <div className={`${ImageCss.MainProductElementImage}`}>
      <Image
        priority
        alt={alt}
        src={bg}
        quality={100}
        fill={true}
        className={ImageCss.MainProductElementImage}
        style={{ objectFit: "cover" }}
      />
    </div>
  );

  const handleDbNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    if (name && !/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
      setError(
        "Database name must start with a letter or underscore and contain only letters, numbers, or underscores."
      );
    } else {
      setError("");
    }
    setDbName(name);
    onDbNameChange(name);
  };

  const handleDbNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !error && dbName) {
      setIsPopupOpen(true);
    }
  };

  const addColumn = () => {
    const newColumns = [...columns, { name: "", type: "TEXT", nullable: true }];
    setColumns(newColumns);
    onColumnsChange(newColumns);
  };

  const updateColumn = (
    index: number,
    field: keyof Column,
    value: string | boolean
  ) => {
    const newColumns = [...columns];
    newColumns[index] = { ...newColumns[index], [field]: value };
    setColumns(newColumns);
    onColumnsChange(newColumns);
  };

  const removeColumn = (index: number) => {
    const newColumns = columns.filter((_, i) => i !== index);
    setColumns(newColumns);
    onColumnsChange(newColumns);
  };

  const handleGenerate = () => {
    const hasEmptyNames = columns.some((col) => !col.name);
    if (hasEmptyNames) {
      setError("All column names must be filled.");
      return;
    }
    setError("");
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPopupOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const theRoute = navRouter();

  const handleBlueprintCreated = async () => {
    theRoute.refresh(); // Consider using useRouter().refresh()
  };

  return (
    <>
      <div className={styles.DefineBlueprint}>
        <label className={`${CSS["ClauseTitle"]}`} htmlFor="queryHotelName">
          
          <div
            className={`${ImageCss.LuvProductElement} ${ImageCss.MainProductElementAnime} ${ImageCss.MainProductElementIsometric} ${ImageCss.MainProductElementStackSlide} ${ImageCss.Wrap}`}
          >
            {imageData.map((image, index) => (
              <ImageCard key={index} {...image} />
            ))}
          </div>
          <button
            className={styles.BookNow}
            onClick={() => {
              setActivePage("UseClauses");
            }}
          >
            <Link href="" className={styles.BookBtn}>
              Auto-Generate A Name
            </Link>
          </button>
        </label>
        <form className={styles.GridPropertyX}>
          <input
            className={styles.DefineBlueprintSearch}
            placeholder="Enter a Name For Your DB"
            name="DefiningBlueprint"
            id="DefiningBlueprint"
            aria-label="DefiningBlueprint"
            value={dbName}
            onChange={handleDbNameChange}
            onKeyDown={handleDbNameKeyDown}
          />
          <GenerateBlueprintName
          onClick={() => setactivateVerticalPanel(!activateVerticalPanel)}
        />
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>

      <div
        className={`${styles.popupOverlay} ${isPopupOpen ? styles.active : ""}`}
      />

      <div
        className={`${styles.popup} ${isPopupOpen ? styles.active : ""}`}
        aria-modal="true"
      >
        {activateVerticalPanel && (
          <>
            <DefineColumnsTitle BlueprintName={setBluePrintName} />
            <form className={styles.GridPropertyX}>
              {columns.map((col, index) => (
                <div key={index} className={styles.columnRow}>
                  <input
                    className={styles.hotelSearchV}
                    placeholder="Column Name (e.g., id)"
                    value={col.name}
                    onChange={(e) =>
                      updateColumn(index, "name", e.target.value)
                    }
                  />
                  <select
                    className={styles.hotelSearchV}
                    value={col.type}
                    onChange={(e) =>
                      updateColumn(index, "type", e.target.value)
                    }
                  >
                    <option value="INTEGER">Integer</option>
                    <option value="FLOAT">Float</option>
                    <option value="TEXT">Text</option>
                    <option value="BOOLEAN">Boolean</option>
                    <option value="DATE">Date</option>
                    <option value="JSON">JSON</option>
                  </select>
                  <label className={styles.MainSubTitle}>
                    Nullable:
                    <input
                      className={styles.hotelSearchV}
                      type="checkbox"
                      checked={col.nullable}
                      onChange={(e) =>
                        updateColumn(index, "nullable", e.target.checked)
                      }
                    />
                  </label>
                  <button
                    type="button"
                    className={styles.BookNow}
                    onClick={() => removeColumn(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className={styles.BookNow}
                onClick={addColumn}
              >
                Add Column
              </button>
            </form>
          </>
        )}
        {previewVerticalPanel && (
          <>
            <div className={styles.previewSection}>
              <h3 className={styles.MainSubTitle}>Preview Table Headers</h3>
              <table className={styles.previewTable}>
                <thead>
                  <tr>
                    {columns.map((col, index) => (
                      <th key={index}>
                        {col.name || "Unnamed"} ({col.type}
                        {col.nullable ? ", Nullable" : ""})
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
              {columns.length === 0 && <p>No columns added yet.</p>}
            </div>

            <button className={styles.BookNow} onClick={handleGenerate}>
              Generate Blueprint
            </button>
            <button
              className={styles.BookNow}
              onClick={() => setIsPopupOpen(false)}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </>
  );
}
