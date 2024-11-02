# backend/app/services/trip_service.py

def calculate_trip_price(base_price, distance, duration, dynamic_pricing=False):
    
    price = base_price + (distance * 0.5) + (duration * 0.3)  

    if dynamic_pricing:
        
        price *= 1.2  

    return round(price, 2)
