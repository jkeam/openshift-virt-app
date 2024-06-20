FROM registry.access.redhat.com/ubi9/python-312

# Upgrade pip
RUN python3.12 -m pip install --upgrade pip

# Allow statements and log messages to immediately appear in the Knative logs
ENV PYTHONUNBUFFERED True

# Install dependencies
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY ./requirements.txt .
RUN pip install --no-cache-dir --upgrade -r ./requirements.txt

# Copy in app
COPY . .

# Setup to run
EXPOSE 8080
USER nobody

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
