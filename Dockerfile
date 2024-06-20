FROM registry.access.redhat.com/ubi9/python-312

# Allow statements and log messages to immediately appear in the Knative logs
ENV PYTHONUNBUFFERED True

# Install system dependency
USER root
RUN dnf -y install httpd

# Install production dependencies
RUN python3.12 -m pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r ./requirements.txt

# Copy local code to the container image
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

ENV PORT 8080
USER nobody

# Run the web service on container startup. Here we use the gunicorn
# webserver, with one worker process and 8 threads.
# For environments with multiple CPU cores, increase the number of workers
# to be equal to the cores available.
CMD ["gunicorn", "--bind", ":8080", "--workers", "1", "--threads", "8", "--timeout", "0", "virt:create_app()"]
