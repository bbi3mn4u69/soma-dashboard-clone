 export function getRandomDateAsString(startYear: number, endYear: number, format: string = 'YYYY-MM-DD'): string {
    const start = new Date(startYear, 0, 1); 
    const end = new Date(endYear, 11, 31); 
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  
    const year = randomDate.getFullYear();
    const month = randomDate.getMonth() + 1; 
    const day = randomDate.getDate();
  
    
    const pad = (num: number) => num.toString().padStart(2, '0');
  
    switch (format) {
      case 'YYYY-MM-DD':
        return `${year}-${pad(month)}-${pad(day)}`;
      case 'MM/DD/YYYY':
        return `${pad(month)}/${pad(day)}/${year}`;
      case 'DD-MM-YYYY':
        return `${pad(day)}-${pad(month)}-${year}`;
      default:
        return `${year}-${pad(month)}-${pad(day)}`; 
    }
  }
  
  
  
  console.log(getRandomDateAsString(1990, 2025, 'MM/DD/YYYY')); // Outputs in 'MM/DD/YYYY' format