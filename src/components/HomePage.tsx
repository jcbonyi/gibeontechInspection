'use client';

import { ClipboardList } from 'lucide-react';
import { InspectionForm } from '@/components/InspectionForm';
import { Letterhead } from '@/components/Letterhead';
import { COMPANY } from '@/constants/brand';

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="no-print relative sticky top-0 z-30 border-b border-brand-200/60 bg-white shadow-sm">
        <div className="absolute right-4 top-4 z-10 hidden lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-3 py-1.5 text-xs font-medium text-accent-700">
            <ClipboardList className="h-3.5 w-3.5" />
            Digital Inspection Form
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
          <Letterhead variant="app" documentTitle={COMPANY.reportTitle} />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <InspectionForm />
      </main>

      <footer className="no-print border-t border-brand-100 bg-white py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {COMPANY.name}
      </footer>
    </div>
  );
}
