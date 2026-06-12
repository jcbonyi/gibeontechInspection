export const COMPANY = {
  name: 'Gibeontech Loss Assessors & Valuers',
  shortName: 'GibeonTech',
  tagline: 'Motor Vehicle Inspection',
  reportTitle: 'Motor Vehicle Inspection Report',
  address: {
    line1: 'Virdi House, 16 Butere Road, 1st Floor',
    line2: 'Industrial Area, Nairobi, Kenya',
  },
  email: 'info@gibeontech.co.ke',
  website: 'gibeontech.co.ke',
  phones: '020 2055324 / 0736 055324',
  contactAddressLine: 'Virdi House, 16 Butere Road, 1st Floor, Industrial Area, Nairobi, Kenya',
  contactDetailsLine: 'info@gibeontech.co.ke · gibeontech.co.ke · 020 2055324 / 0736 055324',
} as const;

export const BRAND_COLORS = {
  purple: '#4B499E',
  purpleDark: '#3F3D99',
  purpleLight: '#6B69B8',
  teal: '#26A69A',
  tealBright: '#2EC4B6',
  tealLight: '#E0F7F5',
} as const;

/** GibeonTech wordmark + icon only (for left-aligned letterhead layout). */
export const LOGO_MARK_PATH = '/gibeontech-logo.png';
/** Full letterhead image fallback. */
export const LOGO_PATH = '/gibeontech-letterhead.png';

export async function loadLogoDataUrl(): Promise<string> {
  const response = await fetch(LOGO_PATH);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/** Removes near-black pixels so the logo sits cleanly on white backgrounds (PDF / print). */
export async function loadLogoTransparent(): Promise<string> {
  const dataUrl = await loadLogoDataUrl();
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(dataUrl);
        return;
      }
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i] < 40 && pixels[i + 1] < 40 && pixels[i + 2] < 40) {
          pixels[i + 3] = 0;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}
