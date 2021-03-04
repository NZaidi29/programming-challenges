# Exercise 1
def reduceFraction(num, den):
    from math import gcd
    x=gcd(num,den)#gcd to get greatest common denominator
    return num/x,den/x


# Exercise 2
def isMagicDate(day, month, year):
    #day multiply by month == last 2 digits of the year
    return day*month == year%100#last 2 digits on year given by modulus of 100


# Exercise 3
def sublist(l):
    result=[[]]#all lists have a sublist of empty so add that

    for i in range(0,len(l),1):#go from 1st to last=i
        for j in range(i,len(l),1):#go from i to last=j
            sublist=l[i:j+1]#slice i to j
            result.append(sublist)#add slice to result

    return result


# Exercise 4
def pigLatin(word):
    w=word.lower()#copying the input and putting in lowercase to make everything easier
    vowels=('a','e','i','o','u')
    punctuation=(',','.','?','!')
    punc=''#declare punctuation so if a word without punctuation is used we dont get an error

    if w[-1] in punctuation:#checking and saving punctuation
        punc=w[-1]
        w=w[:-1]#removing punctuation from the word we are using so it doesnt mess up the rest

    for i in range(0,len(w),1):#iterate over letters
        if w[i] in vowels:#search for the vowels
            break#stops when it finds the first vowel

    if i==0:#vowel is first
        result = w+'way'

    else:#consonant is first
        result = w[i:]+w[0:i]+'ay'

    if word[0].isupper() == True:#checking for capital letter
        result = result[0].upper() + result[1:]

    return result + punc


# Exercise 5
def morseCode(message):
    #dictionary of alphanumeric to morse code
    code={
      'a':'.-',
      'b':'-...',
      'c':'-.-.',
      'd':'-..',
      'e':'.',
      'f':'..-.',
      'g':'--.',
      'h':'....',
      'i':'..',
      'j':'.---',
      'k':'-.-',
      'l':'.-..',
      'm':'--',
      'n':'-.',
      'o':'---',
      'p':'.--.',
      'q':'--.-',
      'r':'.-.',
      's':'...',
      't':'-',
      'u':'..-',
      'v':'...-',
      'w':'.--',
      'x':'-..-',
      'y':'-.--',
      'z':'--..',
      '1':'.----',
      '2':'..---',
      '3':'...--',
      '4':'....-',
      '5':'.....',
      '6':'-....',
      '7':'--...',
      '8':'---..',
      '9':'----.',
      '0':'-----'
     }

    word=message.lower()#convert to lower as all my dictionaries are lower
    result=''#declaring my result before filling it

    for i in word:#go through all characters or message/word
        if i.isalnum()==True:#check if letter or number
            result += code[i] + ' '#add the morse code of letter or number plus a space

    return result[:-1]#remove the very last space and give the result


# Exercise 6
def int2Text(num):
    digits={
    '0':'zero',
    '1':'one',
    '2':'two',
    '3':'three',
    '4':'four',
    '5':'five',
    '6':'six',
    '7':'seven',
    '8':'eight',
    '9':'nine'
    }

    tens={
    '2':'twenty',
    '3':'thirty',
    '4':'forty',
    '5':'fifty',
    '6':'sixty',
    '7':'seventy',
    '8':'eighty',
    '9':'ninety'
    }

    teens={
    '10':'ten',
    '11':'eleven',
    '12':'twelve',
    '13':'thirteen',
    '14':'fourteen',
    '15':'fifteen',
    '16':'sixteen',
    '17':'seventeen',
    '18':'eighteen',
    '19':'nineteen'
    }

    number=str(num)#easier to operate dictionary with a string for me
    #doing it this way as string indices would be different if number>99 vs number<99
    d=num%10#digits
    t=num%100
    t=t//10#tens

    result=''#declaring my result

    if num>99:#bigger than 99
        if t!=0:
            if t==1:#hundreds and teens
                result = digits[number[0]] + ' hundred ' + teens[number[1]+number[2]]

            else:#hundred and tens
                result = digits[number[0]] + ' hundred ' + tens[number[1]]

                if d!=0:#hundred and tens and digits
                    result += ' ' + digits[number[2]]

        else:
            result +=digits[number[0]] + ' hundred'#hundreds

            if d!=0:#hundreds and digits
                result += ' ' + digits[number[2]]
    else:#less than 100
        if t!=0:
            if t==1:#teens
                result = teens[number[0]+number[1]]

            else:#tens
                result = tens[number[0]]

                if d!=0:#tens and digits
                    result += ' ' + digits[number[1]]

        else:#digits
            result = digits[number[0]]

    return result


# Exercise 7
def missingComment(filename):

    result=[]#declare result

    f=open(filename, "r")#open file
    l=f.read()#read file
    lines=l.split('\n')#split into lines

    for i in range(0,len(lines)):#iterate over lines
        line=lines[i]#save current line

        if line[0:4]=='def ':#check if line is a function definition
            prevLine=lines[i-1]#save previous line

            if prevLine.startswith('#')==False:#if previous line not a comments then get function name
                name=line[4:]#removing the 'def '
                name=name.split('(')#getting the function name
                result.append(name[0])#add name to result

    f.close()#close file
    return result#list of function names without comment


# Exercise 8
def consistentLineLength(filename, length):

    result=[]#declare result

    f=open(filename, "r")#open file
    text=f.read()#read file
    text=text.replace('\n',' ')#replacing all new lines with a space

    while len(text)>length:#repeating loop until less than length characters left in text file
        for i in range(length,0,-1):#going from character length to 0
            if text[i]==' ':#if char is space then the line ends here
                line=text[:i]#puts all characters except space as the line
                result.append(line)#adding the line to results
                text=text[i+1:]#removing line plus the space from text
                break#stopping the for loop

    if text[-1]==' ':#check for an extra trailing space
        text=text[:-1]#remove extra space at end

    result.append(text)#once text has less than length char adds leftover chars to result

    f.close()#close file
    return result


# Exercise 9
def knight(start, end, moves):
    return None


# Exercise 10
def warOfSpecies(environment):
    return None
