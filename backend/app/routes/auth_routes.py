from flask import Blueprint, request, jsonify, current_app
from ..user import User

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user = User(
        current_app.db_manager,
        email=data.get('email'),
        password=data.get('password'),
        phone_number=data.get('phone_number')
    )
    user.save()
    return jsonify({"message": "User registered successfully"}), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.load_from_db(current_app.db_manager, data.get('email'))

    if user and user.password == data.get('password'):
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401
