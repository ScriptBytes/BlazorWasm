FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["BlazorWasm/BlazorWasm.csproj", "BlazorWasm/"]
RUN dotnet restore "BlazorWasm/BlazorWasm.csproj"
COPY . .
WORKDIR "/src/BlazorWasm"
RUN dotnet build "BlazorWasm.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BlazorWasm.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BlazorWasm.dll"]
