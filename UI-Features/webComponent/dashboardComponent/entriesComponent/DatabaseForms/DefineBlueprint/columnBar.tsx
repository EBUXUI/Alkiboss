'use client';

import styles from "@/styles/Search/Home.module.css";
import Popup from "@/styles/Popup/index.module.css";
import { useState } from "react";

interface Column {
  name: string;
  type: string; // From LuvSQL types: TEXT, INTEGER, etc.
  nullable: boolean;
}

interface BlueprintBarProps {
  onDbNameChange: (name: string) => void;
  onColumnsChange: (columns: Column[]) => void;
}

export default function BlueprintBar({ onDbNameChange, onColumnsChange }: BlueprintBarProps) {
  const [dbName, setDbName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [columns, setColumns] = useState<Column[]>([]);

  const handleDbNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    if (name && !/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
      setError('Database name must start with a letter or underscore and contain only letters, numbers, or underscores.');
    } else {
      setError('');
    }
    setDbName(name);
    onDbNameChange(name);
  };

  const handleDbNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !error && dbName) {
      setIsPopupOpen(true);
    }
  };

  const addColumn = () => {
    setColumns([...columns, { name: '', type: 'TEXT', nullable: true }]);
    onColumnsChange([...columns, { name: '', type: 'TEXT', nullable: true }]);
  };

  const updateColumn = (index: number, field: keyof Column, value: string | boolean) => {
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
    const hasEmptyNames = columns.some(col => !col.name);
    if (hasEmptyNames) {
      setError('All column names must be filled.');
      return;
    }
    setError('');
    setIsPopupOpen(false); // Close popup, parent handles submission
  };

  return (
    <>
      <form className={styles.GridPropertyX}>
        <label htmlFor="DefiningBlueprint" className={styles.MainTitle}>
          Database Name
        </label>
        <input
          className={styles.hotelSearchV}
          placeholder="Name Of Your Database"
          name="DefiningBlueprint"
          id="DefiningBlueprint"
          aria-label="DefiningBlueprint"
          value={dbName}
          onChange={handleDbNameChange}
          onKeyDown={handleDbNameKeyDown}
        />
        {error && <p className={styles.error}>{error}</p>}
      </form>

      {/* Overlay for blur */}
      <div className={`${Popup.popupOverlay} ${isPopupOpen ? Popup.active : ''}`} />

      {/* Popup */}
      <div className={`${Popup.popup} ${isPopupOpen ? Popup.active : ''}`}>
        <h2 className={Popup.MainTitle}>Define Columns for {dbName}</h2>
        <form className={styles.GridPropertyX}>
          {columns.map((col, index) => (
            <div key={index} className={Popup.columnRow}>
              <input
                className={styles.hotelSearchV}
                placeholder="Column Name (e.g., id)"
                value={col.name}
                onChange={(e) => updateColumn(index, 'name', e.target.value)}
              />
              <select
                className={styles.hotelSearchV}
                value={col.type}
                onChange={(e) => updateColumn(index, 'type', e.target.value)}
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
                  type="checkbox"
                  checked={col.nullable}
                  onChange={(e) => updateColumn(index, 'nullable', e.target.checked)}
                />
              </label>
              <button type="button" className={styles.BookNow} onClick={() => removeColumn(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" className={styles.BookNow} onClick={addColumn}>
            Add Column
          </button>
        </form>

        {/* Preview Table Headers */}
        <div className={Popup.previewSection}>
          <h3 className={styles.MainSubTitle}>Preview Table Headers</h3>
          <table className={Popup.previewTable}>
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index}>
                    {col.name || 'Unnamed'} ({col.type}{col.nullable ? ', Nullable' : ''})
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
        <button className={styles.BookNow} onClick={() => setIsPopupOpen(false)}>
          Cancel
        </button>
      </div>
    </>
  );
}