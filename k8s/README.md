# Run Playwright API tests on Kubernetes

Create the API token Secret without committing the token:

```bash
kubectl create secret generic playwright-api-secrets \
  --from-literal=API_AUTH_TOKEN="Token YOUR_JWT"
```

Run the test Job:

```bash
kubectl apply -f k8s/job.yaml
kubectl logs -f job/playwright-api-tests
```

Run it again by replacing the completed Job:

```bash
kubectl delete job playwright-api-tests --ignore-not-found
kubectl apply -f k8s/job.yaml
```

Check the result:

```bash
kubectl get job playwright-api-tests
kubectl get pods -l app=playwright-api-tests
```

The init container clones the latest `main` branch into a shared volume. The
test container uses the dependencies from the reusable GHCR image and runs the
checked-out source from `/app`.

If the GHCR package is private, create an image pull Secret and add it under
`spec.template.spec.imagePullSecrets` in `job.yaml`:

```bash
kubectl create secret docker-registry ghcr-credentials \
  --docker-server=ghcr.io \
  --docker-username=YOUR_GITHUB_USERNAME \
  --docker-password=YOUR_GITHUB_PAT
```
