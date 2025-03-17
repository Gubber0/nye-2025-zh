module.exports.createHttpHeaders = (input) => {

    const headers = {};
  
    if (!Array.isArray(input)) {
      return headers; 
    }
  
    input.forEach(headerData => {
      const headerName = headerData[0].toLowerCase();
      const headerValue = headerData.slice(1).join(', ');
  
  
      if (headers[headerName]) {
        headers[headerName] += `, ${headerValue}`;
      } else {
        headers[headerName] = headerValue;
      }
    });

  
    return headers;
    
  };

    module.exports.getItems = (items, params) => {
      const { page, pageSize, sort } = params;
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
    
      const sortedItems = sort === 'asc'
        ? [...items].sort((a, b) => a.displayTitle.localeCompare(b.displayTitle))
        : [...items].sort((a, b) => b.displayTitle.localeCompare(a.displayTitle));
    
      return sortedItems.slice(startIndex, endIndex).map(item => ({
        id: item.id,
        title: { main: item.displayTitle }

      }));

    };