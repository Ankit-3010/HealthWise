# HealthWise Startup Script

echo "Starting HealthWise application..."
echo "Setting up backend..."
cd backend


pip3 install -r requirements.txt


echo "Starting Flask backend on port 5001..."
python3 app.py

sleep 2

cd ../frontend
echo "Setting up frontend..."
npm install
echo "Starting React frontend..."
npm run dev
