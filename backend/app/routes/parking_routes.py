from flask import Blueprint, request, jsonify, current_app
from ..parking import ParkingSpace

parking_bp = Blueprint('parking', __name__)


@parking_bp.route('/parking/create', methods=['POST'])
def create_parking_space():
    data = request.get_json()
    db_manager = current_app.db_manager

    parking_space = ParkingSpace(
        db_manager,
        owner_email=data.get('owner_email'),
        location_address=data.get('location_address'),
        gps_coordinates=data.get('gps_coordinates'),
        description=data.get('description'),
        base_price=data.get('base_price'),
        dynamic_pricing=data.get('dynamic_pricing')
    )
    parking_space.save()
    return jsonify({"message": "Parking space created successfully"}), 201


@parking_bp.route('/parking/<parking_id>', methods=['DELETE'])
def delete_parking_space(parking_id):
    db_manager = current_app.db_manager
    parking_space = ParkingSpace.load_from_db(db_manager, parking_id)
    if parking_space:
        parking_space.delete()
        return jsonify({"message": "Parking space deleted"}), 200
    return jsonify({"message": "Parking space not found"}), 404
