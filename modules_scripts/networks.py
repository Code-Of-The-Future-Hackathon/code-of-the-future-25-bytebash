import psutil
import time
import requests

# Get info from unifi api
# Send it to the backend to update database
def fetch_info():
    url = "https://api.ui.com/ea/sites"
    api_key = ""
    headers = {
        "X-API-KEY": api_key,
    }
    endpoint = f"http://localhost:3000/api/networks/stats"

    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            data = response.json()

            isp_info = data['data'][0]['statistics']['ispInfo']
            percentages = data['data'][0]['statistics']['percentages']
            json = {
                "ispName": str(isp_info['name']),
                "ispOrganization": str(isp_info['organization']),
                "txRetry": str(percentages['txRetry']),
                "wanUptime": str(percentages['wanUptime']),
            }

            try:
                response = requests.post(endpoint, json=json , headers=headers)
                if response.status_code == 200:
                    print(response.json())
                else:
                    print(response.status_code)

            except Exception as e:
                print(e)
        else:
            print(response.status_code)

    except requests.exceptions.RequestException as e:
        print(e)

def send_data():
    while True:
        try:
            fetch_info()
            time.sleep(10) # 10 seconds
        except Exception:
            break

if __name__ == "__main__":
    send_data()