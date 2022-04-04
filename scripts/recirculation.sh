## define end value ##
END=5
## print date five times ##
x=$END 
while [ $x -gt 0 ]; 
do 
  npm run cy:run &
  x=$(($x-1))
done