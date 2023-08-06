export const capitalize  = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const reverseString  = (word) => {
  
  return word.split("").reverse().reduce((prev, char)=> {return prev + char},"")
}

export const calculator = {
  add(x,y) {
    return x+y;
  },
  subtract(x,y) {
    return x-y;
  },
  divide(x,y) {
    return x/y;
  },
  multiply(x,y) {
    return x*y;
  }
}

export const caesarCipher = (str, shift, decrypt = false) => {
  const s = decrypt ? (26 - shift) % 26 : shift;
  const n = s > 0 ? s : 26 + (s % 26);
  return [...str]
    .map((l, i) => {
      const c = str.charCodeAt(i);
      if (c >= 65 && c <= 90)
        return String.fromCharCode(((c - 65 + n) % 26) + 65);
      if (c >= 97 && c <= 122)
        return String.fromCharCode(((c - 97 + n) % 26) + 97);
      return l;
    })
    .join('');
};

export const analyzeArray = (arr) => {
  const sorted = arr.sort((a,b) => {return a - b})
  return {
    average: sorted.reduce((a,b)=> {return a +b},0) / sorted.length,
    min: sorted[0],
    max: sorted[sorted.length -1],
    length: sorted.length
  }
}

let x = analyzeArray([1,8,3,4,2,6])

x
