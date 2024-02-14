// this is the postman return data from the 5 day forecast
// Main object, 'list' property seems to be the important one that contains the rest

// 5 day weather forecast containing the following information from the api
// List > main > temp with only 1 decimal place
// Weather > main
// Weather > description 
// Wind > speed
// dt_txt   - grab the date in the format of Example: Jan 1, 2023



{
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1707944400,
            "main": {
                "temp": 269.63,
                "feels_like": 262.84,
                "temp_min": 267.57,
                "temp_max": 269.63,
                "pressure": 995,
                "sea_level": 995,
                "grnd_level": 990,
                "humidity": 67,
                "temp_kf": 2.06
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 31
            },
            "wind": {
                "speed": 6.75,
                "deg": 298,
                "gust": 11.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-14 21:00:00"
        },
        {
            "dt": 1707955200,
            "main": {
                "temp": 267.15,
                "feels_like": 260.28,
                "temp_min": 265.4,
                "temp_max": 267.15,
                "pressure": 995,
                "sea_level": 995,
                "grnd_level": 990,
                "humidity": 76,
                "temp_kf": 1.75
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 45
            },
            "wind": {
                "speed": 5.68,
                "deg": 295,
                "gust": 11.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-15 00:00:00"
        },
        {
            "dt": 1707966000,
            "main": {
                "temp": 265.89,
                "feels_like": 258.89,
                "temp_min": 265.89,
                "temp_max": 265.89,
                "pressure": 996,
                "sea_level": 996,
                "grnd_level": 990,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 6.05,
                "deg": 301,
                "gust": 12.75
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-15 03:00:00"
        },
        {
            "dt": 1707976800,
            "main": {
                "temp": 267.82,
                "feels_like": 260.82,
                "temp_min": 267.82,
                "temp_max": 267.82,
                "pressure": 996,
                "sea_level": 996,
                "grnd_level": 990,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 78
            },
            "wind": {
                "speed": 7.34,
                "deg": 302,
                "gust": 14.29
            },
            "visibility": 7368,
            "pop": 0.31,
            "snow": {
                "3h": 0.21
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-15 06:00:00"
        },
        {
            "dt": 1707987600,
            "main": {
                "temp": 269.79,
                "feels_like": 262.79,
                "temp_min": 269.79,
                "temp_max": 269.79,
                "pressure": 997,
                "sea_level": 997,
                "grnd_level": 992,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.01,
                "deg": 312,
                "gust": 15.06
            },
            "visibility": 7067,
            "pop": 0.33,
            "snow": {
                "3h": 0.34
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-15 09:00:00"
        },
        {
            "dt": 1707998400,
            "main": {
                "temp": 269.8,
                "feels_like": 262.8,
                "temp_min": 269.8,
                "temp_max": 269.8,
                "pressure": 1000,
                "sea_level": 1000,
                "grnd_level": 995,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.76,
                "deg": 318,
                "gust": 13.99
            },
            "visibility": 10000,
            "pop": 0.25,
            "snow": {
                "3h": 0.16
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-15 12:00:00"
        },
        {
            "dt": 1708009200,
            "main": {
                "temp": 271.23,
                "feels_like": 264.28,
                "temp_min": 271.23,
                "temp_max": 271.23,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 996,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.12,
                "deg": 318,
                "gust": 13.47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-15 15:00:00"
        },
        {
            "dt": 1708020000,
            "main": {
                "temp": 272.21,
                "feels_like": 265.67,
                "temp_min": 272.21,
                "temp_max": 272.21,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 997,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 7.83,
                "deg": 316,
                "gust": 13.73
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-15 18:00:00"
        },
        {
            "dt": 1708030800,
            "main": {
                "temp": 271.84,
                "feels_like": 265.54,
                "temp_min": 271.84,
                "temp_max": 271.84,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 999,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 85
            },
            "wind": {
                "speed": 7.03,
                "deg": 303,
                "gust": 12.69
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-15 21:00:00"
        },
        {
            "dt": 1708041600,
            "main": {
                "temp": 269.92,
                "feels_like": 263.48,
                "temp_min": 269.92,
                "temp_max": 269.92,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1000,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 47
            },
            "wind": {
                "speed": 6.23,
                "deg": 298,
                "gust": 13.19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-16 00:00:00"
        },
        {
            "dt": 1708052400,
            "main": {
                "temp": 268.2,
                "feels_like": 262.05,
                "temp_min": 268.2,
                "temp_max": 268.2,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 999,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 4.99,
                "deg": 297,
                "gust": 11.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-16 03:00:00"
        },
        {
            "dt": 1708063200,
            "main": {
                "temp": 265.83,
                "feels_like": 260.36,
                "temp_min": 265.83,
                "temp_max": 265.83,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 998,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 9
            },
            "wind": {
                "speed": 3.48,
                "deg": 278,
                "gust": 8.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-16 06:00:00"
        },
        {
            "dt": 1708074000,
            "main": {
                "temp": 264.6,
                "feels_like": 260.28,
                "temp_min": 264.6,
                "temp_max": 264.6,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 996,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 2.3,
                "deg": 269,
                "gust": 3.16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-16 09:00:00"
        },
        {
            "dt": 1708084800,
            "main": {
                "temp": 268.17,
                "feels_like": 268.17,
                "temp_min": 268.17,
                "temp_max": 268.17,
                "pressure": 999,
                "sea_level": 999,
                "grnd_level": 993,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 1.32,
                "deg": 288,
                "gust": 2.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-16 12:00:00"
        },
        {
            "dt": 1708095600,
            "main": {
                "temp": 270.56,
                "feels_like": 266.71,
                "temp_min": 270.56,
                "temp_max": 270.56,
                "pressure": 996,
                "sea_level": 996,
                "grnd_level": 990,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.83,
                "deg": 12,
                "gust": 4.1
            },
            "visibility": 10000,
            "pop": 0.22,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-16 15:00:00"
        },
        {
            "dt": 1708106400,
            "main": {
                "temp": 271.27,
                "feels_like": 265.8,
                "temp_min": 271.27,
                "temp_max": 271.27,
                "pressure": 995,
                "sea_level": 995,
                "grnd_level": 990,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.14,
                "deg": 340,
                "gust": 7.24
            },
            "visibility": 10000,
            "pop": 0.1,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-16 18:00:00"
        },
        {
            "dt": 1708117200,
            "main": {
                "temp": 270.31,
                "feels_like": 264.98,
                "temp_min": 270.31,
                "temp_max": 270.31,
                "pressure": 998,
                "sea_level": 998,
                "grnd_level": 993,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.55,
                "deg": 328,
                "gust": 8.63
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-16 21:00:00"
        },
        {
            "dt": 1708128000,
            "main": {
                "temp": 265.89,
                "feels_like": 261.18,
                "temp_min": 265.89,
                "temp_max": 265.89,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 996,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 89
            },
            "wind": {
                "speed": 2.78,
                "deg": 296,
                "gust": 4.48
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-17 00:00:00"
        },
        {
            "dt": 1708138800,
            "main": {
                "temp": 266.12,
                "feels_like": 260.33,
                "temp_min": 266.12,
                "temp_max": 266.12,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 998,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 13
            },
            "wind": {
                "speed": 3.89,
                "deg": 274,
                "gust": 8.85
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-17 03:00:00"
        },
        {
            "dt": 1708149600,
            "main": {
                "temp": 266.73,
                "feels_like": 260.79,
                "temp_min": 266.73,
                "temp_max": 266.73,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 999,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 4.23,
                "deg": 281,
                "gust": 9.98
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-17 06:00:00"
        },
        {
            "dt": 1708160400,
            "main": {
                "temp": 265.44,
                "feels_like": 259.74,
                "temp_min": 265.44,
                "temp_max": 265.44,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 999,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 58
            },
            "wind": {
                "speed": 3.62,
                "deg": 276,
                "gust": 8.11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-17 09:00:00"
        },
        {
            "dt": 1708171200,
            "main": {
                "temp": 266.76,
                "feels_like": 261.65,
                "temp_min": 266.76,
                "temp_max": 266.76,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1000,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 3.31,
                "deg": 264,
                "gust": 9.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-17 12:00:00"
        },
        {
            "dt": 1708182000,
            "main": {
                "temp": 270.98,
                "feels_like": 265.57,
                "temp_min": 270.98,
                "temp_max": 270.98,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1000,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.92,
                "deg": 248,
                "gust": 7.48
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-17 15:00:00"
        },
        {
            "dt": 1708192800,
            "main": {
                "temp": 272.54,
                "feels_like": 267.88,
                "temp_min": 272.54,
                "temp_max": 272.54,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 997,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.34,
                "deg": 252,
                "gust": 6.61
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-17 18:00:00"
        },
        {
            "dt": 1708203600,
            "main": {
                "temp": 272.1,
                "feels_like": 269.5,
                "temp_min": 272.1,
                "temp_max": 272.1,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 996,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.98,
                "deg": 251,
                "gust": 3.35
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-17 21:00:00"
        },
        {
            "dt": 1708214400,
            "main": {
                "temp": 268.04,
                "feels_like": 268.04,
                "temp_min": 268.04,
                "temp_max": 268.04,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 996,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 1.17,
                "deg": 284,
                "gust": 1.62
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-18 00:00:00"
        },
        {
            "dt": 1708225200,
            "main": {
                "temp": 267.55,
                "feels_like": 267.55,
                "temp_min": 267.55,
                "temp_max": 267.55,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 996,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 1.26,
                "deg": 318,
                "gust": 1.32
            },
            "visibility": 10000,
            "pop": 0.08,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-18 03:00:00"
        },
        {
            "dt": 1708236000,
            "main": {
                "temp": 268.1,
                "feels_like": 268.1,
                "temp_min": 268.1,
                "temp_max": 268.1,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 995,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 1.18,
                "deg": 278,
                "gust": 1.95
            },
            "visibility": 10000,
            "pop": 0.32,
            "snow": {
                "3h": 0.22
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-18 06:00:00"
        },
        {
            "dt": 1708246800,
            "main": {
                "temp": 266.65,
                "feels_like": 263.48,
                "temp_min": 266.65,
                "temp_max": 266.65,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 995,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 78
            },
            "wind": {
                "speed": 1.78,
                "deg": 238,
                "gust": 2.12
            },
            "visibility": 10000,
            "pop": 0.21,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-18 09:00:00"
        },
        {
            "dt": 1708257600,
            "main": {
                "temp": 269.64,
                "feels_like": 263.47,
                "temp_min": 269.64,
                "temp_max": 269.64,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 995,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 84
            },
            "wind": {
                "speed": 5.61,
                "deg": 258,
                "gust": 9.09
            },
            "visibility": 3218,
            "pop": 0.66,
            "snow": {
                "3h": 0.39
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-18 12:00:00"
        },
        {
            "dt": 1708268400,
            "main": {
                "temp": 269.26,
                "feels_like": 262.26,
                "temp_min": 269.26,
                "temp_max": 269.26,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1000,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 6.96,
                "deg": 292,
                "gust": 10.68
            },
            "visibility": 10000,
            "pop": 0.52,
            "snow": {
                "3h": 0.39
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-18 15:00:00"
        },
        {
            "dt": 1708279200,
            "main": {
                "temp": 268.69,
                "feels_like": 261.69,
                "temp_min": 268.69,
                "temp_max": 268.69,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1001,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 89
            },
            "wind": {
                "speed": 7.71,
                "deg": 277,
                "gust": 12.19
            },
            "visibility": 10000,
            "pop": 0.36,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-18 18:00:00"
        },
        {
            "dt": 1708290000,
            "main": {
                "temp": 266.33,
                "feels_like": 259.33,
                "temp_min": 266.33,
                "temp_max": 266.33,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 1004,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 82
            },
            "wind": {
                "speed": 6.79,
                "deg": 283,
                "gust": 12.03
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-18 21:00:00"
        },
        {
            "dt": 1708300800,
            "main": {
                "temp": 265.21,
                "feels_like": 258.21,
                "temp_min": 265.21,
                "temp_max": 265.21,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1008,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 78
            },
            "wind": {
                "speed": 6.43,
                "deg": 277,
                "gust": 12.06
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-19 00:00:00"
        },
        {
            "dt": 1708311600,
            "main": {
                "temp": 264.49,
                "feels_like": 257.49,
                "temp_min": 264.49,
                "temp_max": 264.49,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1010,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 60
            },
            "wind": {
                "speed": 5.12,
                "deg": 285,
                "gust": 11.41
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-19 03:00:00"
        },
        {
            "dt": 1708322400,
            "main": {
                "temp": 262.79,
                "feels_like": 257.05,
                "temp_min": 262.79,
                "temp_max": 262.79,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1012,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 39
            },
            "wind": {
                "speed": 3.13,
                "deg": 279,
                "gust": 5.59
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-19 06:00:00"
        },
        {
            "dt": 1708333200,
            "main": {
                "temp": 262.84,
                "feels_like": 257.8,
                "temp_min": 262.84,
                "temp_max": 262.84,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1014,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 9
            },
            "wind": {
                "speed": 2.58,
                "deg": 256,
                "gust": 4.55
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-19 09:00:00"
        },
        {
            "dt": 1708344000,
            "main": {
                "temp": 265.52,
                "feels_like": 261.43,
                "temp_min": 265.52,
                "temp_max": 265.52,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1013,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 18
            },
            "wind": {
                "speed": 2.25,
                "deg": 198,
                "gust": 3.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-19 12:00:00"
        },
        {
            "dt": 1708354800,
            "main": {
                "temp": 272.89,
                "feels_like": 266.78,
                "temp_min": 272.89,
                "temp_max": 272.89,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1012,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 7.27,
                "deg": 194,
                "gust": 12.99
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-19 15:00:00"
        },
        {
            "dt": 1708365600,
            "main": {
                "temp": 274.23,
                "feels_like": 267.82,
                "temp_min": 274.23,
                "temp_max": 274.23,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1007,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 90
            },
            "wind": {
                "speed": 9.15,
                "deg": 188,
                "gust": 17.26
            },
            "visibility": 10000,
            "pop": 0.21,
            "snow": {
                "3h": 0.15
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-19 18:00:00"
        }
    ],
    "city": {
        "id": 5969423,
        "name": "Halifax",
        "coord": {
            "lat": 44.6486,
            "lon": -63.5859
        },
        "country": "CA",
        "population": 0,
        "timezone": -14400,
        "sunrise": 1707909426,
        "sunset": 1707946812
    }
}