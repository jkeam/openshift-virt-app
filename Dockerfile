FROM registry.access.redhat.com/ubi8/python-39

# Upgrade pip
RUN python3.9 -m pip install --upgrade pip

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
ENV PORT 8080
USER nobody

CMD ["fastapi", "run", "./main.py", "--port", "8080"]
