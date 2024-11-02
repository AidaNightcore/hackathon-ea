# backend/app/services/trip_service.py

def calculate_trip_price(base_price, distance, duration, dynamic_pricing=False):
    """
    Calculate the trip price based on distance, duration, and optional dynamic pricing.
    """
    # Example calculations
    price = base_price + (distance * 0.5) + (duration * 0.3)  # Adjust factors as needed

    if dynamic_pricing:
        # Apply a multiplier if dynamic pricing is enabled
        price *= 1.2  # Example multiplier

    return round(price, 2)
