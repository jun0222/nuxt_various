yarn start:json-server & sleep 5 && yarn test:server

PID=$(lsof -ti:3001)
if [ ! -z "$PID" ]; then
  echo "Stopping json-server running on port 3001..."
  kill -9 $PID
fi

echo "□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□"
echo "■■■■■□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□"
echo "□■□□□■□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□"
echo "□■□□□■□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□"
echo "□■□□□□■□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□"
echo "□■□□□□■□□□□■■■□□□□■■□■■■□□□□□■■■□□□□□□□□□□□□□"
echo "□■□□□□■□□□■□□□■□□□□■■□□□■□□□■□□□■□□□□□□□□□□□□"
echo "□■□□□□■□□■□□□□□■□□□■□□□□■□□■□□□□□■□□□□□□□□□□□"
echo "□■□□□□■□□■□□□□□■□□□■□□□□■□□■■■■■■■□□□□□□□□□□□"
echo "□■□□□□■□□■□□□□□■□□□■□□□□■□□■□□□□□□□□□□□□□□□□□"
echo "□■□□□□■□□■□□□□□■□□□■□□□□■□□■□□□□□□□□□□□□□□□□□"
echo "□■□□□■□□□■□□□□□■□□□■□□□□■□□■□□□□□■□□□■□□□□□□□"
echo "□■□□□■□□□□■□□□■□□□□■□□□□■□□□■□□□□■□□■■■□□□□□□"
echo "■■■■■□□□□□□■■■□□□□■■■□□■■■□□□■■■■□□□■■■□□□□□□"
echo "□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□■□□□□□□□"
echo "□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□"
echo
echo
echo
echo "==============================="
echo "=====press enter key!==========="
echo "==============================="