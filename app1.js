const compress = (a, b = true) => {
        if (typeof a !== 'string' && !(a instanceof String) && typeof b !== Boolean) {
          throw new Error('InvalidType');
        }
      
        if (b) 
        {
          let result = '';
          for (let i = 0; i < a.length; i++) {
            let count = 1;
            while (i < a.length - 1 && a[i] === a[i + 1]) {
              count++;
              i++;
            }
            result += a[i] + (count >= 1 ? count : '');
          }
          return result;
        } 
        else 
        {
          let result = '';
          let i = 0;
          while (i < a.length) {
            let char = a[i]
            if (/[A-Za-z]/.test(char)) {
              const count = parseInt(a[i + 1], 10)
              if (!isNaN(count)) {
                result += char.repeat(count);
                i += 2;
              } else
               {
                result += char
                i++;
              }
            } else {
              result += char;
              i++;
            }
          }
          return result;
        }
      };

module.exports = compress