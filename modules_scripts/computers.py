import psutil
import time
import requests

def get_system_usage():
    id="pc_"; # Random ass shit for HRIS
    url =  f"http://localhost:3000/api/computers/{id}/stats"
    api_key="pk_"

    # CPU usage
    cpu_percent = psutil.cpu_percent(interval=1) # Get CPU usage

    # Battery information
    battery = psutil.sensors_battery()
    btr_percent = battery.percent

    data = {
        'usage': str(cpu_percent),
        'battery': int(btr_percent)
    }

    headers = {
        'X-API-KEY': api_key,
    }

    try:
        req = requests.post(url, json=data, headers=headers)
        if req.status_code == 200:
            print("Updated!")
        else:
            print(req.status_code)

    except requests.exceptions.RequestException as e:
        print(e)


def monitor_system_usage():
    while True:
        try:
            get_system_usage()
            time.sleep(1) # 1 second
        except KeyboardInterrupt:
            break


if __name__ == "__main__":
    monitor_system_usage()
