#!/opt/local/bin/python
import os
import time
for root, directories, files in os.walk('.'):
	i = 0
	for filename in files:
		if filename.endswith('jpg'):
			#print "move " + filename + " to " + str(i)
			os.rename(filename, str(i) + ".jpg" )
			i+=1
	break;
