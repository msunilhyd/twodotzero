# def isPhoneNumber(text):
#     if len(text) != 12:
#         return False
#     for i in range(0, 3):
#         if not text[i].isdecimal():
#             return False
#         if text[3] != '-':
#             return False
#         for i in range(4, 7):
#             if not text[i].isdecimal():
#                 return False
#         if text[7] != '-':
#             return False
#         for i in range(8, 12):
#             if not text[i].isdecimal():
#                 return False
#     return True
#
#
# # print('Is 415-555-4242 a phone number?')
# # print(isPhoneNumber('415-555-4242'))
# # print('Is Moshi moshi a phone number?')
# # print(isPhoneNumber('Moshi moshi'))
#
# message = '''Call me at 415-555-1011 tomorrow. 415-555-9999 is
#             my office.'''
# for i in range(len(message)):
#     chunk = message[i:i+12]
#     if isPhoneNumber(chunk):
#         print('Phone number found: ' + chunk)
# print('Done')
#
# import re
#
# phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
# mo = phoneNumRegex.search('My number is 415-555-4242')
# # print('Phone number found: ' + mo.group())
#
# import re
# phoneNumRegex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')
# mo = phoneNumRegex.search('My number is 415-555-4242.')
# #
# # print(mo.group(1))
# # print(mo.group(2))
# # print(mo.group(0))
# # print(mo.group())
#
# # print(mo.groups())
#
# areaCode, mainNumber = mo.groups()
# print(areaCode)
# print(mainNumber)


#
# import re
#
# phoneNumRegex = re.compile(r'(\(\d\d\d\)) (\d\d\d-\d\d\d\d)')
# mo = phoneNumRegex.search('My phone number is (415) 555-4242.')
# print(mo.group(1))
# print(mo.group(2))

#
# import re
# #
# # re.compile(r'(\(Parenthesis\)')
#
#
# heroRegex = re.compile(r'Batman|Tina Fey')
# mo1 = heroRegex.search('Batman and Tina Fey')
# # print(mo1.group())
#
# mo2 = heroRegex.search('Tina Fey and Batman')
# print(mo2.group())

>>>phoneRegex = re.compile(r'(\d\d\d-)?\d\d\d-\d\d\d\d')
>>>mo1 = phoneRegex.search('My number is 415-555-4242')
mo1.group()
'415-555-4242'

>>> mo2 = phoneRegex.search('My number is 555-4242')
>>> mo2.group()
'555-4242'
