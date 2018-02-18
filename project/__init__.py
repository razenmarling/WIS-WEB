"""Prototype."""


from flask import Flask, render_template, request, redirect, url_for, session
from datetime import timedelta

# Initialize flask
app = Flask(__name__, static_url_path='')

# get config
app.config.from_object('config')
app.secret_key = 'r��H�_���[��t'

@app.route('/', methods=['POST', 'GET'])
def index():
	if request.method == 'POST':
		return redirect(url_for('main_admin'))

	return render_template('index.html')

@app.route('/main-admin')
def main_admin():
	return render_template('main_admin.html')

@app.route('/materials-receiving')
def mat_rec():
	return render_template('mat_rec.html')

@app.route('/materials-issuance')
def mat_issuance():
	return render_template('mat_issu.html')

@app.route('/returned-materials')
def ret_mat():
	return render_template('ret_mat.html')

@app.route('/materials-adjustment')
def mat_adj():
	return render_template('mat_adj.html')

@app.route('/job-order')
def job_order():
	return render_template('job_order.html')

@app.route('/audit-trail')
def aud_trail():
	return render_template('aud_trail.html')

@app.route('/add-account')
def add_acc():
	return render_template('add_acc.html')

@app.route('/view-inventory')
def v_inv():
	return render_template('v_inv.html')