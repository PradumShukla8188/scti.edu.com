import React, { useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export interface ReceiptData {
  id: string;
  type: 'Franchise Subscription' | 'Donation';
  amount: number;
  date: string;
  name: string;
  email: string;
  details?: string;
}

export function ReceiptModal({
  isOpen,
  onClose,
  data
}: {
  isOpen: boolean;
  onClose: () => void;
  data: ReceiptData | null;
}) {
  const receiptRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!receiptRef.current || !data) return;
    
    const canvas = await html2canvas(receiptRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Receipt_${data.id}.pdf`);
  };

  if (!data) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white border-gray-200 shadow-2xl">
        <DialogHeader className="text-center sm:text-center">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900 text-center">Payment Successful</DialogTitle>
          <DialogDescription className="text-gray-500 text-center">Thank you! Here is your official receipt.</DialogDescription>
        </DialogHeader>
        
        {/* Receipt Body (Captured for PDF) */}
        <div 
          ref={receiptRef}
          className="bg-white p-8 border border-[#e5e7eb] shadow-sm mt-2 font-sans"
          style={{ letterSpacing: '0px', fontVariantLigatures: 'none', fontFeatureSettings: '"rlig" 0, "calt" 0', textRendering: 'geometricPrecision' }}
        >
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#e5e7eb] pb-6 mb-6">
            <div>
              <h3 className="font-extrabold text-2xl text-[#1e3a8a] uppercase tracking-wider">SCTI Foundation</h3>
              <p className="text-sm text-[#6b7280] mt-1">Official Payment Receipt</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-[#111827]">RECEIPT</p>
              <p className="text-sm text-[#6b7280] mt-1">{data.date}</p>
            </div>
          </div>
          
          {/* Customer Info */}
          <div className="mb-8">
            <p className="text-xs font-bold text-[#9ca3af] uppercase mb-2">Billed To</p>
            <p className="font-bold text-[#111827] text-lg">{data.name}</p>
            {data.email && <p className="text-sm text-[#4b5563] mt-1">{data.email}</p>}
          </div>

          {/* Details Table */}
          <table className="w-full mb-8 text-sm">
            <thead>
              <tr className="border-b border-[#e5e7eb]">
                <th className="text-left pb-3 font-bold text-[#6b7280] uppercase text-xs">Description</th>
                <th className="text-right pb-3 font-bold text-[#6b7280] uppercase text-xs">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#f3f4f6]">
                <td className="py-4">
                  <p className="font-bold text-[#111827] text-base">{data.type}</p>
                  {data.details && <p className="text-sm text-[#6b7280] mt-1">{data.details}</p>}
                  <p className="text-xs text-[#9ca3af] mt-2">Trans. ID: {data.id}</p>
                </td>
                <td className="py-4 text-right font-medium text-[#111827] text-base align-top">
                  ₹{data.amount}
                </td>
              </tr>
            </tbody>
          </table>
          
          {/* Total */}
          <div className="flex justify-end mb-8">
            <div className="w-full sm:w-1/2">
              <div className="flex justify-between border-t-2 border-[#111827] pt-3">
                <span className="font-bold text-[#111827] uppercase text-sm">Total Paid</span>
                <span className="text-xl font-black text-[#16a34a]">₹{data.amount}</span>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center pt-6 border-t border-[#e5e7eb]">
            <p className="text-xs font-medium text-[#6b7280]">This is a computer generated receipt and does not require a physical signature.</p>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <Button variant="outline" className="w-full bg-white text-gray-900 border-gray-300 hover:bg-gray-100 hover:text-gray-900" onClick={onClose}>
            Close
          </Button>
          <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white" onClick={downloadPDF}>
            <Download className="w-4 h-4" /> Download PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
