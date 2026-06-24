"use client";

import { useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";

interface PdfViewerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  /** Absolute or root-relative URL to the PDF */
  pdfUrl: string;
  /** Optional subtitle shown below the title (e.g. "Whitepaper · 14 pages") */
  subtitle?: string;
}

export function PdfViewer({ isOpen, onClose, title, pdfUrl, subtitle }: PdfViewerProps) {
  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // ESC closes
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex flex-col bg-[#021530]/95 backdrop-blur-sm"
      onClick={(e) => {
        // Close when the backdrop itself is clicked (not the inner content)
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Branded chrome — header bar */}
      <div className="flex flex-shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-[#021530] px-4 py-3 sm:px-6 sm:py-4">
        <div className="min-w-0 flex-1">
          <h2 className="truncate font-display text-base text-white sm:text-lg">{title}</h2>
          {subtitle && <p className="mt-0.5 text-xs text-white/50">{subtitle}</p>}
        </div>
        <div className="flex flex-shrink-0 items-center gap-2">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
            aria-label="Open PDF in new tab"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">New tab</span>
          </a>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
            aria-label="Download PDF"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Download</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
            aria-label="Close PDF viewer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* PDF viewport — native browser reader handles rendering, zoom, pages, print */}
      <div className="relative flex-1 bg-[#E6F3FB]">
        <iframe
          src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
          title={title}
          className="absolute inset-0 h-full w-full border-0 bg-white"
        />
      </div>
    </div>
  );
}
