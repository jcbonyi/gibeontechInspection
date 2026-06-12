declare module 'jspdf-autotable' {
  import { jsPDF } from 'jspdf';

  interface AutoTableOptions {
    startY?: number;
    head?: (string | number)[][];
    body?: (string | number)[][];
    margin?: { top?: number; right?: number; bottom?: number; left?: number };
    theme?: string;
    styles?: Record<string, unknown>;
    headStyles?: Record<string, unknown>;
    alternateRowStyles?: Record<string, unknown>;
    columnStyles?: Record<number, Record<string, unknown>>;
    didParseCell?: (data: {
      section: string;
      column: { index: number };
      row: { index: number };
      cell: { styles: Record<string, unknown> };
    }) => void;
  }

  function autoTable(doc: jsPDF, options: AutoTableOptions): void;
  export default autoTable;
}
