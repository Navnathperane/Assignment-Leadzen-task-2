//Find the longest palindrome from the given string. Palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam, civic, radar
function printSubStr(str,low,high)
{
    temp=""
	for (let i = low; i <= high; ++i)
	    {
	        temp+=str[i];
	    }
		document.write(temp);
}

function longestPalSubstr(str)
{
	let n = str.length;
	let maxLength = 1, start = 0;

	// Nested loop to mark start and end index
	for (let i = 0; i < str.length; i++) {
		for (let j = i; j < str.length; j++) {
			let flag = 1;

			// Check palindrome
			for (let k = 0; k < (j - i + 1) / 2; k++)
				if (str[i + k] != str[j - k])
					flag = 0;

			// Palindrome
			if (flag!=0 && (j - i + 1) > maxLength) {
				start = i;
				maxLength = j - i + 1;
			}
		}
	}

	document.write("Longest palindrome subString is: ");
	printSubStr(str, start, start + maxLength - 1);

}

let str = "babad";
longestPalSubstr(str);
let str1 = "cbbd";
longestPalSubstr(str1);